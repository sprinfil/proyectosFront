import React from "react";
import { BancoProyectosTable } from "../../../components/BancoProyectosTable/BancoProyectosTable";
import { Card } from "../../../components/ui/card";
import { assets } from "../../../lib/assets";

export const BancoProyectos = () => {
  return (
    <>
      <div className="md:px-[100px] p-2 w-full  pt-[30px] pb-[100px] overflow-auto">
        <div className="w-full flex mb-[30px] items-center">
          <img src={assets.logo} alt="" className="w-[100px] mr-3"/>
          <p className="font-medium text-3xl">Banco de proyectos</p>
        </div>

        <Card className="p-[40px]">
          <BancoProyectosTable />
        </Card>
      </div>
    </>
  );
};
