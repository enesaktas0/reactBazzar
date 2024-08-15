import supabase from "./supabase";

export const getCategories = async ({ filterValue }) => {
  const query = supabase.from("categories").select("*");

  if (filterValue === "home") {
    query.eq("isShowMain", "true");
  }
  let { data: categories, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }
  return categories;
};
