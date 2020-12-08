import axios from "axios";

export const getData = {
  request: async () => await axios.get(`https://clava.io/api/rotas`),
  success: { message: "Rotas successfully fetched", variant: "success" },
  error: { message: "Failed to fetch rotas", variant: "error" },
};
export const generateRota = {
  request: async () => await axios.get(`https://clava.io/api/generate`),
  success: { message: "Rota successfully generated", variant: "success" },
  error: { message: "Failed to generate rota", variant: "error" },
};
