import axiosClient from "../../axios-client";

export const AuthService = {
  login: async (values: Object) => {
    try {
      const response = await axiosClient.post("/auth/login",values);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
