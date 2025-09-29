import { useState } from "react";
import { useApiPetition } from "../usePetition";
import { ProyectoService } from "../../services/ProyectoService";

export const useGenerarPdf = () => {
  const { request, loading, response } = useApiPetition();

  const generarPdf = async (id: any) => {
    const res = await request(() => ProyectoService.generarPdf(id));

    if (res) {
      const blob = new Blob([res?.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ficha_tecnica_${id}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return { generarPdf, loading, response };
};
