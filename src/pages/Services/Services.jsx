import axios from "axios";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    axios.get("/data.json").then((res) => console.log(res.data));
  }, []);

  return <div>Hello world</div>;
};

export default Services;
