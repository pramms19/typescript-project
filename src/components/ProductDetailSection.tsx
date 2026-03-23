import { fetchProducts } from "@/actions/fetchProducts";
import { Suspense, use } from "react";
import ProductDetailCard from "./ProductDetailCard";

export default function ProductDetailSection() {
  const productsPromise = fetchProducts(1);

  return (
    <Suspense fallback={<div className="p-8">Loading Product...</div>}>
      <DetailSection productsPromise={productsPromise} />
    </Suspense>
  );
}

interface ProductResponse {
  products: Product[];
}

interface ProductDetailProps {
  productsPromise: Promise<ProductResponse>;
}

function DetailSection({ productsPromise }: ProductDetailProps) {
  const productsData = use(productsPromise);
  console.log(productsData?.products);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
{/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {productsData?.products.map((product) => (
          <ProductDetailCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
