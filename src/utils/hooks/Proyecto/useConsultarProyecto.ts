import { toast } from "sonner";
import { catchErrors } from "../../tools";
import { useEffect, useState } from "react";
import type { Proyecto } from "../../types/Proyecto";
import { ProyectoService } from "../../services/ProyectoService";
import { createProyectoAdapter } from "../../adapters/ProyectoAdapter";

export const useConsultarProyecto = (id: any) => {
  const [loadingConsultandoProyecto, setLoadingConsultandoProyecto] =
    useState(false);
  const [proyecto, setProyecto] = useState<Partial<Proyecto> | null>(null);

  const consultarProyecto = async () => {
    try {
      setLoadingConsultandoProyecto(true);
      const response = await ProyectoService.show(id);
      setProyecto(createProyectoAdapter(response?.data?.data));
    } catch (error) {
      catchErrors(error, toast);
    } finally {
      setLoadingConsultandoProyecto(false);
    }
  };

  useEffect(() => {
    if (id) {
      consultarProyecto();
    }
  }, [id]);

  return {
    proyecto,
    loadingConsultandoProyecto,
    consultarProyecto,
  };
};
