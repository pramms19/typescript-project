export const fetchProductsById = async (id:number) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch details");
  }
  return response.json();
};
