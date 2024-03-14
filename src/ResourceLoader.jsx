import React, { useState, useEffect } from "react";
import axios from "axios";

export const ResourceLoader = ({ url, propName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      setState(response.data);
    })();
  }, [url]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [propName]: state });
        }
        return child;
      })}
    </>
  );
};
