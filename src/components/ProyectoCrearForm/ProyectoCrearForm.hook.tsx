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
  });

  const validationSchema = Yup.object({
    nombre_obra: Yup.string().required("El nombre de obra es obligatorio"),
    clave: Yup.string().required("El número de obra es obligatorio"),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const guardarProyecto = async (values: Proyecto) => {
    try {
      setLoading(true);
      const response = await ProyectoService.store(values);
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
    loading
  };
};
