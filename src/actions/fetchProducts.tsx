export const fetchProducts = async (limit:number) => {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
