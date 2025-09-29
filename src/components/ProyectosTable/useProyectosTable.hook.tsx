import { type ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Download, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProyectoService } from "../../utils/services/ProyectoService";
import { createAdapterMeta } from "../../utils/adapters/MetaAdapter";
import { useGenerarPdf } from "../../utils/hooks/Proyecto/useGenerarPdf";
import { ButtonGenerarFichaTecnica } from "../ButtonGenerarFichaTecnica/ButtonGenerarFichaTecnica";

export const useProyectosTable = () => {
  const navigate = useNavigate();

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "nombre_obra",
      header: "Nombre",
      // cell: ({ row }) => (
      //   <div className="capitalize">{row.getValue("status")}</div>
      // ),
    },
    {
      accessorKey: "clave",
      header: "Clave",
      // cell: ({ row }) => (
      //   <div className="capitalize">{row.getValue("status")}</div>
      // ),
    },
    {
      accessorKey: "asignado_nombre",
      header: "Encargado",
      // cell: ({ row }) => (
      //   <div className="capitalize">{row.getValue("status")}</div>
      // ),
    },
    {
      accessorKey: "fecha_ingreso",
      header: "Fecha de ingreso",
      // cell: ({ row }) => (
      //   <div className="capitalize">{row.getValue("status")}</div>
      // ),
    },
    {
      accessorKey: "estado",
      header: "Estado",
      cell: ({ row }) => {
        let proyecto = row?.original;
        return (
          <div className="capitalize">{proyecto?.status_proyecto.nombre}</div>
        );
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <>
            <div className="flex items-center gap-2">
              <Button
                className="ml-auto"
                onClick={() => navigate("verProyecto/" + row.original.id)}
              >
                <Eye />
              </Button>
              <ButtonGenerarFichaTecnica id={row?.original?.id} />
            </div>
          </>
        );
      },
    },
  ];

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  const [params, setParams] = useState({ nombre: "", fecha_ingreso: "" });

  const consultarProyectos = async () => {
    try {
      setLoading(true);
      const response = await ProyectoService.index(params);
      console.log(response?.data);
      setData(response?.data?.data);
      setMeta(createAdapterMeta(response?.data));
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    consultarProyectos();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      consultarProyectos();
    }, 500); // espera 500ms después de que el usuario deja de escribir

    return () => clearTimeout(handler); // limpia el timeout si cambia el valor antes de 500ms
  }, [params.nombre]);

  return {
    columns,
    data,
    navigate,
    loading,
    meta,
    setMeta,
    setLoading,
    setData,
    params,
    setParams,
  };
};
