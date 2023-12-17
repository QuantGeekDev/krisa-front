import { useCallback } from "react";
import axios from "axios";
import { KrisaFromDb } from "../types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useKrisaApi = () => {
  const getKrisas = useCallback(async (): Promise<KrisaFromDb[]> => {
    const { data: krisas } = await axios.get("/krisas");

    return krisas;
  }, []);

  return { getKrisas };
};

export default useKrisaApi;
