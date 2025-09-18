import React from "react";
import { ProyectosTable } from "../../../components/ProyectosTable/ProyectosTable";
import { Card } from "../../../components/ui/card";
import { useNavigate } from "react-router-dom";
import { BreadCrumb } from "../../../components/BreadCrumb/BreadCrumb";

export const ProyectosTableScreen = () => {
  return (
    <>
      <BreadCrumb
        screens={[
          { nombre: "Proyectos", url: "/" },
        ]}
      />
      <Card className="p-[40px]">
        <ProyectosTable />
      </Card>
    </>
  );
};
