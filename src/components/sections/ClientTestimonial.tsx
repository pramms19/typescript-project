import { CircleUserRound, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { fetchReviews } from "@/actions/fetchReviews";

export default function ClientTestimonial() {
  const [reviews, setReviews] = useState<any[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Number of cards to show at once

  // Fetch Reviews
  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchReviews();
        setReviews(data.slice(0, 12));
      } catch (error) {
        console.error(error);
      }
    };

    loadReviews();
  }, []);

  // Carousel
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => {
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  const maxIndex = Math.max(0, reviews.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };
  const translateValue = currentIndex * (100 / cardsToShow);

  return (
    <div className="py-14">
      <div className="bg-muted px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-foreground pb-10 text-center">
          Client Testimonial
        </div>

        <div className="relative max-w-7xl mx-auto pl-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-4"
              style={{
                transform: `translateX(-${translateValue}%)`,
              }}
            >
              {reviews.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-white p-5 rounded-md shadow-md space-y-4 shrink-0"
                    style={{ width: `calc(${100 / cardsToShow}% - 1rem)` }}
                  >
                    {/* <img src="/assets/Vector.png" /> */}

                    <div className="flex justify-between items-center pr-2 ">
                      <div className="flex gap-1 items-center">
                        {/* <img
                          src=""
                          className="rounded-full h-14 w-14 object-cover"
                        /> */}
                        <CircleUserRound
                          strokeWidth={1}
                          className="text-neutral-400 rounded-full h-14 w-14 object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-secondary line-clamp-1">
                            {item.reviewerName}
                          </p>
                          <p className="text-xs text-neutral-400">Customer</p>
                        </div>
                      </div>

                      <div className="items-center space-y-2">
                        <div className="text-sm text-gray-700">
                          {item.comment}
                        </div>

                        <div className="flex gap-1">
                          {Array.from({ length: 5 }, (_, index) => {
                            if (index < Math.floor(item.rating)) {
                              return (
                                <Star
                                  key={index}
                                  size={10}
                                  className="fill-chart-5 text-chart-5"
                                />
                              );
                            } else if (index < item.rating) {
                              return (
                                <Star
                                  key={index}
                                  size={10}
                                  className="fill-chart-5/50 text-chart-5/50"
                                />
                              );
                            } else {
                              return (
                                <Star
                                  key={index}
                                  size={10}
                                  className="fill-neutral-300 text-neutral-300"
                                />
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-rose-50 hover:bg-primary text-secondary hover:text-white rounded-full p-2"
            onClick={prevSlide}
          >
            <ArrowLeft />
          </button>
          <button
            className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-rose-50 hover:bg-primary text-secondary hover:text-white rounded-full p-2"
            onClick={nextSlide}
          >
            <ArrowRight />
          </button>
        </div>
        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`w-1 h-1 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
