import supabase from "./supabase";

const createOrder = async ({ data: userInfo, basket, code, productsPrice }) => {
  const { userName, phone, address } = userInfo;

  let today = new Date();
  const futureDate = new Date(today);
  const estimatedDelivery = futureDate.setDate(today.getDate() + 4);

  const shippingCost = productsPrice < 100 ? 10 : 0;

  const { data, error } = await supabase
    .from("order")
    .insert([
      {
        userName,
        phone,
        address,
        code,
        userCart: basket,
        status: "preparing",
        estimatedDelivery,
        productsPrice,
        shippingCost,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Order could not be created");
  }

  return data;
};

export { createOrder };
