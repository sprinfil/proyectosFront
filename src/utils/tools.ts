import axiosClient from "../axios-client";

export const catchErrors = async (e, toast) => {
  let texto = "Algo salio mal";
  console.log(e);

  try {
    if (e?.response?.data?.message) {
      texto = e?.response?.data?.message;
      if (e?.response?.data?.data?.message) {
        texto = e?.response?.data?.data?.message;
      }
    } else {
      // 🔹 Manejo especial si la respuesta es un Blob con JSON
      if (
        e?.response?.data instanceof Blob &&
        e.response.data.type === "application/json"
      ) {
        // ⚠️ Blob JSON → warning

        const text = await e.response.data.text();
        const json = JSON.parse(text);
        if (json?.error) {
          texto = json.error;
        } else if (json?.message) {
          texto = json.message;
        }
      }
      // 🔹 Errores de validación Laravel (422)
      else if (e?.response?.status == 422) {
        texto = "";

        if (e?.response?.data?.error != null) {
          texto = e?.response?.data?.error;
        } else {
          let errores = e?.response?.data?.errors;
          for (const key in errores) {
            if (errores.hasOwnProperty(key)) {
              const mensaje = errores[key].join(" ").replace(/\./g, " ");
              texto += `${key}: ${mensaje} `;
            }
          }
        }
      }
      // 🔹 Otros casos
      else if (e?.response?.data?.error != null) {
        texto = e?.response?.data?.error;
      } else if (e?.response?.data?.errors?.length > 0) {
        texto = e?.response?.data?.errors;
      } else if (e?.response?.data?.message?.length > 0) {
        texto = e?.response?.data?.message;
      } else if (e?.response?.data?.data?.message) {
        texto = e?.response?.data?.data?.message;
      } else if (e?.length > 0) {
        texto = e;
      }
    }
    toast.error(texto);
    return texto;
  } catch (parseError) {
    console.error("Error al procesar catchErrors:", parseError);
  }
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
