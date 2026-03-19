import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Suspense, use } from "react";
import { fetchProducts } from "../../actions/fetchProducts";
import { ProductSkeleton } from "../skeleton/ProductSkeletonCard";
import ProductCard from "./ProductCard";

export default function NewestProducts() {
  const productsPromise = fetchProducts(5);
  return (
    <Suspense fallback={<ProductSkeleton length={5} />}>
      <NewestProductsClient productsPromise={productsPromise} />
    </Suspense>
  );
}

interface NewestProductProps {
  productsPromise: Promise<ProductResponse>;
}

function NewestProductsClient({ productsPromise }: NewestProductProps) {
  const productsData = use(productsPromise);
  console.log(productsData?.products);

  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-between">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-foreground pb-10">
          Newest Products
        </div>
        <NavLink
          to="/productview"
          className="flex gap-2 text-xs md:text-sm lg:text-base font-medium text-primary hover:text-dark pt-2 md:pt-0"
        >
          View All <ArrowRight className="h-3 md:h-5 w-3 md:w-5" />
        </NavLink>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {productsData?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
