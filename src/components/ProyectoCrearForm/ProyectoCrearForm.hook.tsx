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

  const [defaultValues, setDefaultValues] = useState<Proyecto>({
    nombre_obra: "",
    coords: null,
    localidad: "",
    municipio: "",
    descripcion: "",
    objetivo: "",
    problematica: "",
    costo_total: 0,
    no_etapas: 0,
    // clave: "",
    // archivos: [],
  });

  useEffect(() => {
    setDefaultValues({
      nombre_obra: proyecto?.nombre_obra ?? "",
      coords: proyecto?.coords ?? null,
      localidad: proyecto?.localidad ?? "",
      municipio: proyecto?.municipio ?? "",
      descripcion: proyecto?.descripcion ?? "",
      objetivo: proyecto?.objetivo ?? "",
      problematica: proyecto?.problematica ?? "",
      costo_total: proyecto?.costo_total ?? 0,
      no_etapas: proyecto?.no_etapas ?? 0,
    });
  }, [proyecto]);

  const validationSchema = Yup.object({
    nombre_obra: Yup.string().required("El nombre de obra es obligatorio"),
    coords: Yup.mixed().required("La ubicacion es requerida"),
    localidad: Yup.string().required("La localidad es obligatoria"),
    municipio: Yup.string().required("El municipio es obligatorio"),
    descripcion: Yup.string().required("La descripcion es obligatoria"),
    objetivo: Yup.string().required("El objetivo es requerido"),
    problematica: Yup.string().required("La problematica es requerida"),
    costo_total: Yup.mixed().required("El costo total es requerido"),
    no_etapas: Yup.mixed().required("El número de etapas es requerido"),
    // archivos: Yup.mixed().optional(),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const guardarProyecto = async (values: Proyecto) => {
    try {
      setLoading(true);
      const formData = new FormData();

      Object.entries(values).forEach(([clave, valor]) => {
        if (valor !== undefined && valor !== null) {
          if (typeof valor === "object" && !(valor instanceof File)) {
            formData.append(clave, JSON.stringify(valor));
          } else {
            formData.append(clave, String(valor));
          }
        }
      });

      if (id) {
        await ProyectoService.updatePost(id, formData);
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

  const probarImagen = async () => {
    const lat = 19.432608;
    const lon = -99.133209;
    const zoom = 14;
    const size = "600x400";
    const apiKey = "AIzaSyAnqFPxn8eq_QFwi9HES_LbnyuNmnhf2rA"; // ⚠️ reemplaza con tu clave válida

    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=${zoom}&size=${size}&markers=color:red%7C${lat},${lon}&key=${apiKey}`;

    // Descarga la imagen
    const response = await fetch(mapUrl);
    const blob = await response.blob();

    // Crea un enlace temporal para descargarla
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mapa_google.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return {
    defaultValues,
    validationSchema,
    guardarProyecto,
    loading,
    loadingConsultandoProyecto,
    id,
    probarImagen,
  };
};

/*
  // // Campos simples
  // formData.append("nombre_obra", values.nombre_obra ?? "");
  // formData.append("nombre_programa", values.nombre_programa ?? "");
  // formData.append("apartado", values.apartado ?? "");
  // formData.append("localidad", values.localidad ?? "");
  // formData.append("municipio", values.municipio ?? "");

  // Si 'archivo' es un arreglo de File
  // if (values.archivos && Array.isArray(values.archivos)) {
  //   values.archivos.forEach((file: File) => {
  //     formData.append("archivos[]", file);
  //   });
  // }
*/
