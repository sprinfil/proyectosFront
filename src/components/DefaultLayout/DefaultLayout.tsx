import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <>
      <div className="md:px-[100px] p-2 w-full  pt-[30px] pb-[100px] overflow-auto">
        <p className="mb-[30px] font-medium text-3xl">Proyectos</p>
        <Outlet />
      </div>
    </>
  );
};
