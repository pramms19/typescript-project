export const fetchReviews = async () => {
  const res = await fetch(
    "https://dummyjson.com/products/category/beauty"
  );

  if (!res.ok) throw new Error("Failed to fetch reviews");

  const data = await res.json();

  return data.products.flatMap((product: any) =>
    (product.reviews || []).map((review: any) => ({
      ...review,
      productId: product.id,
    }))
  );
};