import React from "react";
import { useGenerarPdf } from "../../utils/hooks/Proyecto/useGenerarPdf";
import { SharedButton } from "../SharedButton/SharedButton";
import { Download } from "lucide-react";

type ButtonGenerarFichaTecnicaType = {
  id: any;
};
export const ButtonGenerarFichaTecnica = ({
  id,
}: ButtonGenerarFichaTecnicaType) => {
  const { loading, response, generarPdf } = useGenerarPdf();

  return (
    <>
      <SharedButton
        onClick={() => {
          generarPdf(id);
        }}
        loading={loading}
        className="min-w-[130px]"
        texto={
          <>
            Ficha Técnica <Download />
          </>
        }
      />
    </>
  );
};
