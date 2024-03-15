import { useState, useEffect } from "react";
import axios from "axios";

export const useResource = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      setData(response.data);
    })();
  }, [url]);

  return data;
};
