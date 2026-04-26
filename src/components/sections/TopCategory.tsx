import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Suspense, use } from "react";
import { ProductSkeleton } from "../skeleton/ProductSkeletonCard";
import { fetchCategories } from "@/actions/fetchCategories";

interface Category {
  name: string;
  slug: string;
  url: string;
}

export default function TopCategory() {
  const categoryPromise = fetchCategories(10);
  return (
    <Suspense fallback={<ProductSkeleton length={5} />}>
      <CategoriesList categoryPromise={categoryPromise} />
    </Suspense>
  );
}

interface CategoryListProps {
  categoryPromise: Promise<Category[]>;
}

function CategoriesList({ categoryPromise }: CategoryListProps) {
  const categoryData = use(categoryPromise);
  console.log("category", categoryData);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [cardsToShow, setCardsToShow] = useState(5); // Number of cards to show at once
  const maxIndex = Math.max(0, categoryData.length - cardsToShow);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(3);
      } else {
        setCardsToShow(5);
      }
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => {
      window.removeEventListener("resize", updateCards); //Cleanup
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className=" py-14 text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-foreground text-center">
        Top Category
      </div>

      <div className="relative max-w-7xl mx-auto pl-4">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {categoryData.map((category, index) => {
              return (
                <div
                  key={index}
                  className="border border-neutral-200 hover:border-primary hover:shadow-lg hover:shadow-green-50 rounded-sm flex flex-col items-center place-content-center p-6 text-center shrink-0"
                  style={{ width: `calc(${100 / cardsToShow}% - 1rem)` }}
                >
                  <div className="text-lg text-primary font-medium">
                    {category.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-background text-secondary rounded-full p-2"
          onClick={prevSlide}
        >
          <ArrowLeft />
        </button>
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-background text-secondary rounded-full p-2"
          onClick={nextSlide}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
