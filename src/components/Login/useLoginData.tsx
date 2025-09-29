import { useState } from "react";
import * as Yup from "yup";

export const useLoginData = () => {
  const [initialValues, setInitialValues] = useState({
    username: "",
    password: "",
  });

  const validationSchema = Yup.object({
    username: Yup.string().required("El nombre de usuario es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  return { initialValues, validationSchema };
};
