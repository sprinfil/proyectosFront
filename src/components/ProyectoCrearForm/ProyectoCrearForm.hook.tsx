import { useEffect, useState } from "react";
import * as Yup from "yup";
import { catchErrors } from "../../utils/tools";
import type { Proyecto } from "../../utils/types/Proyecto";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { ProyectoService } from "../../utils/services/ProyectoService";
import { useConsultarProyecto } from "../../utils/hooks/Proyecto/useConsultarProyecto";

export const useProyectoCrearForm = () => {
  const params = useParams();
  const id = params?.id;
  const { proyecto, loadingConsultandoProyecto } = useConsultarProyecto(id);

  const [defaultValues, setDefaultValues] = useState({
    nombre_obra: "",
    nombre_programa: "",
    apartado: "",
    localidad: "",
    municipio: "",
    // clave: "",
    // archivos: [],
  });

  useEffect(() => {
    setDefaultValues({
      nombre_obra: proyecto?.nombre_obra ?? "",
      nombre_programa: proyecto?.nombre_programa ?? "",
      apartado: proyecto?.apartado ?? "",
      localidad: proyecto?.localidad ?? "",
      municipio: proyecto?.municipio ?? "",
    });
  }, [proyecto]);

  const validationSchema = Yup.object({
    nombre_obra: Yup.string().required("El nombre de obra es obligatorio"),
    // clave: Yup.string().required("El número de obra es obligatorio"),
    nombre_programa: Yup.string().required(
      "El nombre del programa es obligatorio"
    ),
    apartado: Yup.string().required("El nombre del apartado es obligatorio"),
    localidad: Yup.string().required("La localidad es obligatoria"),
    municipio: Yup.string().required("El municipio es obligatorio"),
    // archivos: Yup.mixed().optional(),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const guardarProyecto = async (values: Proyecto) => {
    try {
      setLoading(true);
      const formData = new FormData();
      // Campos simples
      formData.append("nombre_obra", values.nombre_obra ?? "");
      formData.append("nombre_programa", values.nombre_programa ?? "");
      formData.append("apartado", values.apartado ?? "");
      formData.append("localidad", values.localidad ?? "");
      formData.append("municipio", values.municipio ?? "");

      // Si 'archivo' es un arreglo de File
      // if (values.archivos && Array.isArray(values.archivos)) {
      //   values.archivos.forEach((file: File) => {
      //     formData.append("archivos[]", file);
      //   });
      // }
      if (id) {
        await ProyectoService.update(id, values);
        toast.success("Registro guardado");
      } else {
        await ProyectoService.store(formData);
        toast.success("Registro creado");
        navigate("/");
      }
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
    loadingConsultandoProyecto,
    id,
  };
};
