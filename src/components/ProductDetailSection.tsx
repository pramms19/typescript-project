import { Suspense, use } from "react";
import ProductDetailCard from "./ProductDetailCard";
import { fetchProductsById } from "@/actions/fetchProductDetails";

export default function ProductDetailSection({id}:{id:number}) {
  const productsPromise = fetchProductsById(id);

  return (
    <Suspense fallback={<div className="p-8">Loading Product...</div>}>
      <DetailSection productsPromise={productsPromise} />
    </Suspense>
  );
}

interface ProductDetailProps {
  productsPromise: Promise<Product>;
}

function DetailSection({ productsPromise }: ProductDetailProps) {
  const product = use(productsPromise);
  
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
{/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
       
          <ProductDetailCard product={product} />

      </div>
    </div>
  )
}
