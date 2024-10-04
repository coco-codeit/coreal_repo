import api from "@/apis/index";
import { useMutation } from "@tanstack/react-query";

interface SignupData {
  email: string;
  password: string;
  name: string;
  companyName: string;
}

const signup = async (data: SignupData) => {
  const response = await api.post("auths/signup", data);
  return response.data;
};

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: signup,
  });
};
