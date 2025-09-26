import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProyectosTableScreen } from "../screens/Proyectos/ProyectosTable/ProyectosTable.screen";
import { CrearProyectoScreen } from "../screens/Proyectos/CrearProyecto/CrearProyecto.screen";
import { DefaultLayout } from "../components/DefaultLayout/DefaultLayout";
import { VerProyecto } from "../screens/Proyectos/VerProyecto/VerProyecto.screen";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";
import { Login } from "../components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/proyectos",
        element: <DefaultLayout />,
        children: [
          {
            index: true,
            element: <ProyectosTableScreen />,
          },
          {
            path: "crearProyecto",
            element: <CrearProyectoScreen />,
          },
          {
            path: "verProyecto/:id",
            element: <VerProyecto />,
          },
        ],
      },
    ],
  },
]);

export default router;
