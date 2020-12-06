import axios from "axios";

export const getData = {
  request: async () => await axios.get(`http://clava.io/api/rotas`),
  success: { message: "Rotas successfully fetched", variant: "success" },
  error: { message: "Failed to fetch rotas", variant: "error" },
};
