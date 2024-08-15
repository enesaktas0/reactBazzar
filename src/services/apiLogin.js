import supabase from "./supabase";

export async function checkLogin({ email, password }) {
  if (!email || !password) return;

  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(data);

  if (error) throw new Error(error.message);

  // dispatch({ type: "setUser", payload: data.user.user_metadata });

  return data;
}

// export async function getCurrentUser() {
//   const { data: session } = await supabase.auth.getSession();

//   if (!session.session) return null;

//   const { data, error } = await supabase.auth.getUser();

//   console.log(data);

//   if (error) throw new Error(error.message);

//   return data?.user;
// }
