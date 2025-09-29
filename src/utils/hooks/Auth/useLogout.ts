import ZustandPrincipal from "../../Contexts/ZustandPrincipal";

export const useLogout = () => {
  const { setUser } = ZustandPrincipal();

  const Logout = () => {
    setUser({});
    localStorage.removeItem("ACCESS_TOKEN");
  };

  return {
    Logout,
  };
};
