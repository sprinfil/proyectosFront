import axiosClient from "../../axios-client";
import type { Proyecto } from "../types/Proyecto";

export const ProyectoService = {
  index: async (params: Object) => {
    try {
      const response = await axiosClient.get("/proyectos", {
        params: params,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  store: async (values: FormData) => {
    try {
      const response = await axiosClient.post("/proyectos", values);
      return response;
    } catch (error) {
      throw error;
    }
  },
  show: async (id: number) => {
    try {
      const response = await axiosClient.get("/proyectos/" + id);
      return response;
    } catch (error) {
      throw error;
    }
  },
  update: async (id: number, values: Proyecto) => {
    try {
      const response = await axiosClient.put("/proyectos/" + id, values);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
