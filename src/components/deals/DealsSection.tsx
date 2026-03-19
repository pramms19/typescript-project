import { ArrowRight } from "lucide-react";
import DealsCard from "./DealsCard";
import { Suspense, use } from "react";
import { fetchProducts } from "../../actions/fetchProducts";
import { DealsSkeleton } from "../skeleton/DealsSkeletonCard";
import { Button } from "../ui/button";

export default function DealsSection() {
  const productsPromise = fetchProducts(3);

  return (
    <Suspense fallback={<DealsSkeleton length={3} />}>
      <NewDealsSection productsPromise={productsPromise} />
    </Suspense>
  );
}

interface NewDealsSectionProps {
  productsPromise: Promise<ProductResponse>;
}

function NewDealsSection({ productsPromise }: NewDealsSectionProps) {
  const productsData = use(productsPromise);

  const categories = [
    { id: 1, name: "Hot Deals" },
    { id: 2, name: "Best Seller" },
    { id: 3, name: "Top Rated" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
      {categories.map((item) => (
        <div key={item.id} className="grid grid-cols-1 gap-4">
          <div className="text-xl font-medium text-secondary-foreground text-center lg:text-left">
            {item.name}
          </div>

          {productsData.products.map((product) => (
            <DealsCard key={product.id} product={product} />
          ))}
        </div>
      ))}

      <div className="bg-[url(/assets/bg-m.jpg)] bg-cover bg-center w-full lg:w-auto lg:max-w-sm overflow-hidden rounded-md col-span-1 md:col-span-3 lg:col-span-1">
        <div className="grid justify-items-center">
          <div className="py-8 text-center space-y-2">
            <div className="text-sm font-medium text-secondary-foreground">
              SUMMER SALE
            </div>

            <div className="text-primary text-3xl font-semibold">75% Off</div>

            <Button
              size="xl"
              className="rounded-full flex gap-2 bg-white mt-4 px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-primary hover:bg-background"
            >
              Shop now <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
