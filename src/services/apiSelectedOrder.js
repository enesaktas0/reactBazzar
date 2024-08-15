import supabase from "./supabase";

export const getSelectedOrder = async ({ code }) => {
  let { data: order, error } = await supabase
    .from("order")
    .select("*")
    .eq("code", code);

  if (error) {
    console.error(error);
    throw new Error("Order could not be loaded");
  }
  return order;
};
