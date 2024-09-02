import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (apiUrl = "https://api.npoint.io/9045c260b1565daa9e15") => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setValue(response.data);
        console.log(value);
      })
      .catch((error) => {
        console.error("Error Fetching:", error);
      });
  }, []);

  return [value];
};

export default UseFetch;
