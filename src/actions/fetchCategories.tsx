export const fetchCategories = async (limit: number) => {
  const response = await fetch(
    `https://dummyjson.com/products/categories?limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Categories");
  }
  return response.json();
};
