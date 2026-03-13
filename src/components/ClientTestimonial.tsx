import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ClientTestimonial() {
  const customer = [
    {
      id: 1,
      review:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.Phasellus imperdiet elit eu magna dictum, bibendum cursus velitsodales. Donec sed neque eget",
      profile: "/assets/m1.jpg",
      name: "Robert Fox",
      text: "Customer",
    },
    {
      id: 2,
      review:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.Phasellus imperdiet elit eu magna dictum, bibendum cursus velitsodales. Donec sed neque eget",
      profile: "/assets/m2.jpg",
      name: "Dianne Russell",
      text: "Customer",
    },
    {
      id: 3,
      review:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.Phasellus imperdiet elit eu magna dictum, bibendum cursus velitsodales. Donec sed neque eget",
      profile: "/assets/m3.jpg",
      name: "Eleanor Pena",
      text: "Customer",
    },
    {
      id: 4,
      review:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.Phasellus imperdiet elit eu magna dictum, bibendum cursus velitsodales. Donec sed neque eget",
      profile: "/assets/m1.jpg",
      name: "Robert Fox",
      text: "Customer",
    },
    {
      id: 5,
      review:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.Phasellus imperdiet elit eu magna dictum, bibendum cursus velitsodales. Donec sed neque eget",
      profile: "/assets/m2.jpg",
      name: "Dianne Russell",
      text: "Customer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [cardsToShow, setCardsToShow] = useState(3); // Number of cards to show at once
  const maxIndex = customer.length - cardsToShow;

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
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary pb-10 text-center">
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
              {customer.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-white p-5 rounded-md shadow-md space-y-4 shrink-0"
                    style={{ width: `calc(${100 / cardsToShow}% - 1rem)` }}
                  >
                    <img src="/assets/Vector.png" />
                    <div className="text-sm text-gray-700">{item.review}</div>
                    <div className="flex justify-between gap-4 items-center ">
                      <div className="flex gap-4 items-center">
                        <img
                          src={item.profile}
                          className="rounded-full h-14 w-14 object-cover"
                        />
                        <div>
                          <p className="text-base font-medium text-secondary">
                            {item.name}
                          </p>
                          <p className="text-sm text-neutral-400">
                            {item.text}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <Star size={15} className="fill-sale" strokeWidth={0} />
                        <Star size={15} className="fill-sale" strokeWidth={0} />
                        <Star size={15} className="fill-sale" strokeWidth={0} />
                        <Star size={15} className="fill-sale" strokeWidth={0} />
                        <Star size={15} className="fill-sale" strokeWidth={0} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-neutral-200 hover:bg-primary text-secondary hover:text-white rounded-full p-2"
            onClick={prevSlide}
          >
            <ArrowLeft />
          </button>
          <button
            className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-neutral-200 hover:bg-primary text-secondary hover:text-white rounded-full p-2"
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
