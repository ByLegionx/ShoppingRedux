export const getProducts = async () => {
  const result = await fetch("https://fakestoreapi.com/products");
  const data = await result.json();
  return data;
};
