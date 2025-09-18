import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProyectosTableScreen } from "../screens/Proyectos/ProyectosTable/ProyectosTable.screen";
import { CrearProyectoScreen } from "../screens/Proyectos/CrearProyecto/CrearProyecto.screen";
import { DefaultLayout } from "../components/DefaultLayout/DefaultLayout";
import { VerProyecto } from "../screens/Proyectos/VerProyecto/VerProyecto.screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <ProyectosTableScreen />,
      },
      {
        path: "/crearProyecto",
        element: <CrearProyectoScreen />,
      },
      {
        path: "/verProyecto/:id",
        element: <VerProyecto />,
      },
    ],
  },
]);

export default router;
