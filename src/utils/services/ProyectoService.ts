import axiosClient from "../../axios-client";
import type { Proyecto } from "../types/Proyecto";

const BASE_ENDPONT = "/proyectos";

export const ProyectoService = {
  index: async (params: Object) => {
    try {
      const response = await axiosClient.get(BASE_ENDPONT, {
        params: params,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  store: async (values: FormData) => {
    try {
      const response = await axiosClient.post(BASE_ENDPONT, values);
      return response;
    } catch (error) {
      throw error;
    }
  },
  show: async (id: number) => {
    try {
      const response = await axiosClient.get(BASE_ENDPONT + "/" + id);
      return response;
    } catch (error) {
      throw error;
    }
  },
  update: async (id: any, values: Proyecto) => {
    try {
      const response = await axiosClient.put(BASE_ENDPONT + "/" + id, values);
      return response;
    } catch (error) {
      throw error;
    }
  },
  updatePost: async (id: any, formData: FormData) => {
    try {
      const response = await axiosClient.post(
        BASE_ENDPONT + "/update/" + id,
        formData
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  generarPdf: async (id: any) => {
    try {
      const response = await axiosClient.post(
        BASE_ENDPONT + "/download/" + id,
        {},
        { responseType: "blob" }
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};
