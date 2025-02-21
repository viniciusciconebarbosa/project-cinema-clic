import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRequestData = <T>(url: string): [T | undefined] => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    axios
      .get<T>(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return [data];
};
