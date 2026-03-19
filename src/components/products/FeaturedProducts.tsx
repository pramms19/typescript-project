import DealsSection from "../deals/DealsSection";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=5");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <p>Products Loading...</p>;
  if (hasError || !products) return <p>Error in fetching products</p>;

  console.log("product", products);
  return (
    <div className="mt-60 md:mt-30 lg:mt-14 px-4 sm:px-6 lg:px-8 ">
      <div className=" py-14 text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-foreground text-center">
        Feature Products
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Hot Deals */}
      <DealsSection />
    </div>
  );
}
