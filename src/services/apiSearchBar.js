import supabase from "./supabase";

export const getSearchProducts = async ({ query }) => {
  if (!query) return;

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${query}%`);

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }
  return products;
};
