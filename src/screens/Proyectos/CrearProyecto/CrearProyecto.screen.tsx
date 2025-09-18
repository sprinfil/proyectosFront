import React from "react";
import { BreadCrumb } from "../../../components/BreadCrumb/BreadCrumb";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { ProyectosForm } from "../../../components/ProyectosForm/ProyectosForm";
import { ProyectoCrearForm } from "../../../components/ProyectoCrearForm/ProyectoCrearForm";

export const CrearProyectoScreen = () => {
  return (
    <>
      <BreadCrumb
        screens={[
          { nombre: "Proyectos", url: "/" },
          { nombre: "Crear proyecto", url: "/crearProyecto" },
        ]}
      />
      {/* <ProyectosForm /> */}
      <ProyectoCrearForm />
    </>
  );
};
