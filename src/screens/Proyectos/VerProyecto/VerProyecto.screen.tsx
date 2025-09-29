import React from "react";
import { BreadCrumb } from "../../../components/BreadCrumb/BreadCrumb";
import { ProyectosForm } from "../../../components/ProyectosForm/ProyectosForm";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { AvanceFisico } from "../../../components/AvanceFisico/AvanceFisico";
import { GanttSpl } from "../../../components/GanttSpl/GanttSpl";
import { ProyectoCrearForm } from "../../../components/ProyectoCrearForm/ProyectoCrearForm";

export const VerProyecto = () => {
  return (
    <>
      <BreadCrumb
        screens={[
          { nombre: "Proyectos", url: "/proyectos" },
          { nombre: "Ver Proyecto", url: "verProyecto" },
        ]}
      />
      <Tabs defaultValue="fichaTecnica" className=" h-full ">
        <TabsList>
          <TabsTrigger value="fichaTecnica">Ficha Técnica</TabsTrigger>
          <TabsTrigger value="expedienteTecnico">Expediente Técnico</TabsTrigger>
          {/* <TabsTrigger value="licitaciones">Licitaciones</TabsTrigger> */}
          {/* <TabsTrigger value="Contratos">Contratos</TabsTrigger>
          <TabsTrigger value="avanceFisico">Avance Fisico</TabsTrigger>
          <TabsTrigger value="avanceFinanciero">Avance financiero</TabsTrigger> */}
        </TabsList>
        <TabsContent value="fichaTecnica">
          <ProyectoCrearForm />
        </TabsContent>
        <TabsContent value="expedienteTecnico">
          <ProyectosForm />
        </TabsContent>
        <TabsContent value="licitaciones">Licitaciones</TabsContent>
        <TabsContent value="Contratos">Contratos</TabsContent>
        <TabsContent value="avanceFisico">
          {/* <GanttSpl/> */}
          <AvanceFisico />
        </TabsContent>
        <TabsContent value="avanceFinanciero">Avanze Financiero</TabsContent>
      </Tabs>
    </>
  );
};
