import { useState } from "react";
import * as Yup from "yup";
import { catchErrors } from "../../utils/tools";
import type { Proyecto } from "../../utils/types/Proyecto";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ProyectoService } from "../../utils/services/ProyectoService";

export const useProyectoCrearForm = () => {
  const [defaultValues, setDefaultValues] = useState({
    nombre_obra: "",
    clave: "",
    archivos: [],
  });

  const validationSchema = Yup.object({
    nombre_obra: Yup.string().required("El nombre de obra es obligatorio"),
    clave: Yup.string().required("El número de obra es obligatorio"),
    archivos: Yup.mixed().optional(),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const guardarProyecto = async (values: Proyecto) => {
    try {
      setLoading(true);
      const formData = new FormData();

      // Campos simples
      formData.append("nombre_obra", values.nombre_obra ?? "");
      formData.append("clave", values.clave ?? "");

      // Si 'archivo' es un arreglo de File
      if (values.archivos && Array.isArray(values.archivos)) {
        values.archivos.forEach((file: File) => {
          formData.append("archivos[]", file);
        });
      }

      const response = await ProyectoService.store(formData);
      toast.success("Registro creado");
      navigate("/");
    } catch (error) {
      catchErrors(error, toast);
    } finally {
      setLoading(false);
    }
  };

  return {
    defaultValues,
    validationSchema,
    guardarProyecto,
    loading,
  };
};
