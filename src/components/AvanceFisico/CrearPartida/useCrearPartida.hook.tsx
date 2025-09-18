import type { crearPartida, Partida } from "../../../utils/types/Partidas";
import * as Yup from "yup";

export const useCrearPartida = (
  partidas: Partida[],
  setPartidas: Function,
  refTrigger: any
) => {
  const crearPartida = (values: crearPartida) => {
    setPartidas((prev: Partida[]) => {
      const newPartida: Partida = { ...values, id: crypto.randomUUID() };
      return [...prev, newPartida];
    });

    refTrigger?.current?.click();
  };
  const initialValues: crearPartida = {
    name: "",
    start: "",
    end: "",
    dependencies: "",
  };
  const schema = Yup.object().shape({
    name: Yup.string().required("el nombre de la partida es requerido"),
    start: Yup.date()
      .required("el inicio de la partida es requerido")
      .typeError("la fecha de inicio no es válida"),
    end: Yup.date()
      .required("la fecha de finalización es requerida")
      .typeError("la fecha de fin no es válida")
      .min(
        Yup.ref("start"),
        "la fecha de fin debe ser posterior a la de inicio"
      ),
    dependencies: Yup.string().optional(),
  });
  return { crearPartida, schema, initialValues };
};
