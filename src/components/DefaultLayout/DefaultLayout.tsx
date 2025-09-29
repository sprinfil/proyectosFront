import { Navigate, Outlet } from "react-router-dom";
import { UserAvatar } from "../UserAvatar/UserAvatar";

export const DefaultLayout = () => {
  if (!localStorage.getItem("ACCESS_TOKEN")) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className="md:px-[100px] p-2 w-full  pt-[30px] pb-[100px] overflow-auto">
        <div className="w-full flex mb-[30px] items-center bg-">
          <p className="font-medium text-3xl">Proyectos</p>
          <div className="ml-auto">
            <UserAvatar />
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};
