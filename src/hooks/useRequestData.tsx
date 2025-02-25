import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export const useRequestData = (url: string): [AxiosResponse<any, any> | undefined] => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(url) // Tipando a resposta da API como T
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, [url]);

  return [data];
};

