import supabase from "./supabase";

export const getProducts = async ({ filterValue, filter }) => {
  let query = supabase.from("products").select("*");

  if (filter !== null && filter.value !== "all")
    query = query.eq(filter.column, filter.value);

  if (filterValue === "home") {
    query = query.eq("isShowMain", "true");
  }

  let { data: products, error } = await query;

  // let { data: products, error } = await supabase
  //   .from("products")
  //   .select("*")
  //   .eq("isShowMain", "true");

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }
  return products;
};
