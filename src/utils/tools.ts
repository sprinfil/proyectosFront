import axiosClient from "../axios-client";

export const catchErrors = (e, toast) => {
  let texto = "Algo salio mal";
  let variant = "destructive";

  if (e?.response?.status == 422) {
    texto = "";
    let errores = e?.response?.data?.errors;
    for (const key in errores) {
      if (errores.hasOwnProperty(key)) {
        const mensaje = errores[key].join(" ").replace(/\./g, " ");
        texto += `${key}: ${mensaje} `;
      }
    }
  }

  if (e?.response?.status == 500) {
    if (e?.response?.data?.errors?.length > 0) {
      texto = e?.response?.data?.errors;
    } else {
      texto = e?.response?.data?.data?.message;
    }
  }

  if (e?.response?.status == 403) {
    texto = "No tienes permisos para realizar esta acción";
    variant = "";
  }
  console.log(texto);
  // toast({
  //   title: "Error",
  //   description: texto,
  //   variant: variant,
  // });

  toast.error(texto);
};

export const fetchData = async (
  setLoading: Function,
  toast: any,
  params: any,
  endpoint: any
) => {
  try {
    console.log(params);
    setLoading(true);
    console.log(endpoint);
    const response = await axiosClient.get(endpoint, { params: params });
    console.log(response);
    return response?.data;
  } catch (e) {
    catchErrors(e, toast);
    throw e;
  } finally {
    setLoading(false);
  }
};

export const postData = async (
  setLoading: Function,
  toast: any,
  params: any,
  endpoint: any
) => {
  try {
    console.log(endpoint);
    console.log(params);
    setLoading(true);
    const response = await axiosClient.post(endpoint, params);
    console.log(response.data);
    return response?.data;
  } catch (e) {
    catchErrors(e, toast);
    throw e;
  } finally {
    setLoading(false);
  }
};
