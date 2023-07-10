import { useEffect, useState } from "react";
import { getAxiosData } from "../helpers/getRequest";

export const useGetData= (path) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await getAxiosData(path);
      setData(res);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => { getData() }, [path]);

  return data;
};
