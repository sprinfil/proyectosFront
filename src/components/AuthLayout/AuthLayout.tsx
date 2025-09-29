import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  if (localStorage.getItem("ACCESS_TOKEN")) {
    return <Navigate to="/proyectos" />;
  } else {
    return (
      <>
        <Outlet />
      </>
    );
  }
};
