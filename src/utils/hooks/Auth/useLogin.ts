import { useState } from "react";
import { AuthService } from "../../services/AuthService";
import { catchErrors } from "../../tools";
import { toast } from "sonner";
import ZustandPrincipal from "../../Contexts/ZustandPrincipal";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = ZustandPrincipal();

  const Login = async (username: string, password: string) => {
    try {
      setLoading(true);
      const response = await AuthService.login({
        name: username,
        password: password,
      });
      localStorage.setItem("ACCESS_TOKEN", response?.data?.data?.access_token);
      setUser(response?.data?.data?.user);
    } catch (error) {
      catchErrors(error, toast);
    } finally {
      setLoading(false);
    }
  };

  return { loading, Login };
};
