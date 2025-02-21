import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (url: string): [any | undefined] => {
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

export const useRequestData2 = (url:any) => {
   const [data, setData] = useState();

   useEffect(() => {
      axios
         .get(url)
         .then((response) => {
            setData(response.data);
         })
         .catch((error) => {
            console.log(error);
            alert("Ocorreu um erro, tente novamente");
         });
   }, []);

   return [data];
};