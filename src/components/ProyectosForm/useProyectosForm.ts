import React, { useEffect, useState } from "react";

import * as Yup from "yup";
import type { Proyecto } from "../../utils/types/Proyecto";
import { ProyectoService } from "../../utils/services/ProyectoService";
import { catchErrors } from "../../utils/tools";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { createProyectoAdapter } from "../../utils/adapters/ProyectoAdapter";

export const useProyectosForm = () => {
    const [archivosTemporales, setArchivosTemporales] = useState([]);
  const [defaultValues, setDefaultValues] = useState({
    nombre: "",
    estatus: "",
    nombre_obra: "",
    nombre_programa: "",
    clave: "",
    ubicacion: "",
    problematica: "",
    fuente_recurso: "",
    apartado: "",
    localidad: "",
    municipio: "",
    componente: "",
    subcomponente: "",
    accion_tipo: "",
    sub_accion: "",
    dependencia_ejecutora: "OOMSAPAS de La Paz",
    costo_total: 0,
    federal: 0,
    estatal: 0,
    municipal: 0,
    oomsapas: 0,
    otros: 0,
    numero_jornales: 0,
    periodo_estimado_ejecucion: "",
    forma_ejecucion: "",
    fecha_inicio: "",
    fecha_termino: "",
    descripcion: "",
    metas: "",
    clave_inegi: "",
    grado_marginacion: "",
    total_poblacion: 0,
    poblacion_hombres: 0,
    poblacion_mujeres: 0,
    poblacion_indigenas: 0,
    poblacion_afromexicana: 0,
    total_beneficiarios: 0,
    beneficiarios_hombres: 0,
    beneficiarios_mujeres: 0,
    beneficiarios_indigenas: 0,
    beneficiarios_afromexicana: 0,
    archivos: [],
  });

  const validationSchema = Yup.object({
    nombre: Yup.string(),
    estatus: Yup.string(),
    nombre_obra: Yup.string().required("El nombre de la obra es obligatorio"),
    nombre_programa: Yup.string(),
    clave: Yup.string(),
    ubicacion: Yup.string(),
    problematica: Yup.string(),
    fuente_recurso: Yup.string(),
    apartado: Yup.string(),
    localidad: Yup.string(),
    municipio: Yup.string(),
    componente: Yup.string(),
    subcomponente: Yup.string(),
    accion_tipo: Yup.string(),
    sub_accion: Yup.string(),
    dependencia_ejecutora: Yup.string(),
    costo_total: Yup.number(),
    federal: Yup.number(),
    estatal: Yup.number(),
    municipal: Yup.number(),
    oomsapas: Yup.number(),
    otros: Yup.number(),
    numero_jornales: Yup.number(),
    periodo_estimado_ejecucion: Yup.string(),
    forma_ejecucion: Yup.string(),
    fecha_inicio: Yup.string(),
    fecha_termino: Yup.string(),
    descripcion: Yup.string(),
    metas: Yup.string(),
    clave_inegi: Yup.string(),
    grado_marginacion: Yup.string(),
    total_poblacion: Yup.number(),
    poblacion_hombres: Yup.number(),
    poblacion_mujeres: Yup.number(),
    poblacion_indigenas: Yup.number(),
    poblacion_afromexicana: Yup.number(),
    total_beneficiarios: Yup.number(),
    beneficiarios_hombres: Yup.number(),
    beneficiarios_mujeres: Yup.number(),
    beneficiarios_indigenas: Yup.number(),
    beneficiarios_afromexicana: Yup.number(),
    archivos: Yup.mixed().optional(),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingGuardarProyecto, setLoadingGuardarProyecto] = useState(false);
  const params = useParams();

  const guardarProyecto = async (values: Proyecto) => {
    if (params?.id) {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (value === undefined || value === null) return;

        if (key === "archivos" && Array.isArray(value)) {
          value.forEach((file) => {
            if (file instanceof File) {
              formData.append("archivos[]", file);
            }
          });
        } else if (value instanceof File) {
          formData.append(key, value);
        } else if (Array.isArray(value)) {
          value.forEach((v, i) => {
            formData.append(`${key}[${i}]`, String(v));
          });
        } else {
          formData.append(key, String(value));
        }
      });

      try {
        setLoadingGuardarProyecto(true);
        const response = await ProyectoService.updatePost(params?.id, formData);
        setDefaultValues(createProyectoAdapter(response?.data?.data));
        toast.success("Cambios guardados");
        setArchivosTemporales([]);
      } catch (error) {
        catchErrors(error, toast);
      } finally {
        setLoadingGuardarProyecto(false);
      }
    } else {
      try {
        setLoadingGuardarProyecto(true);
        const response = await ProyectoService.store(values);
        toast.success("Registro creado");
        navigate("/");
      } catch (error) {
        catchErrors(error, toast);
      } finally {
        setLoadingGuardarProyecto(false);
      }
    }
  };

  const consultarProyecto = async (id: number) => {
    try {
      setLoading(true);
      const response = await ProyectoService.show(id);
      setDefaultValues(createProyectoAdapter(response?.data?.data));
    } catch (error) {
      catchErrors(error, toast);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params?.id) {
      consultarProyecto(params?.id);
    }
  }, []);

  return {
    validationSchema,
    defaultValues,
    guardarProyecto,
    loading,
    loadingGuardarProyecto,
    archivosTemporales,
    setArchivosTemporales
  };
};
