import { type ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Download, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProyectoService } from "../../utils/services/ProyectoService";
import { createAdapterMeta } from "../../utils/adapters/MetaAdapter";

export const useProyectosTable = () => {
  const navigate = useNavigate();

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "clave",
      header: "Clave",
      // cell: ({ row }) => (
      //   <div className="capitalize">{row.getValue("status")}</div>
      // ),
    },
    {
      accessorKey: "nombre_obra",
      header: "Nombre",
      // cell: ({ row }) => (
      //   <div className="capitalize">{row.getValue("status")}</div>
      // ),
    },
    {
      accessorKey: "encargado",
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
      // cell: ({ row }) => (
      //   <div className="capitalize">{row.getValue("status")}</div>
      // ),
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
              <Button className="">
                Ficha Técnica <Download />
              </Button>
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
