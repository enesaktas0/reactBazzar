import { useMutation } from "@tanstack/react-query";
import { useBasket } from "../contexts/UserReducer";
import { checkLogin } from "../services/apiLogin";
import toast from "react-hot-toast";

export function useLogin() {
  const { dispatch } = useBasket();
  const mutation = useMutation({
    mutationFn: ({ email, password }) => checkLogin({ email, password }),
    onSuccess: () => {
      dispatch({ type: "login" });
    },
    onError: (err) => {
      console.log("ERROR", err.message);
      toast.error("Your email or password incorrect");
    },
  });

  const { mutate: login, status, data } = mutation;

  return { login, status, data };
}
