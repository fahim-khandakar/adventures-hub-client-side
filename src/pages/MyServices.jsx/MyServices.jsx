import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Container from "../../Hooks/Container";
import MySingleService from "../../Components/MySingleService/MySingleService";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const [totalData, setTotalData] = useState([]);
  const email = user.email;
  const { isLoading, data } = useQuery({
    queryKey: ["myServices", totalData],
    queryFn: () =>
      fetch(`http://localhost:5000/services?email=${email}}`).then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    // Set totalData when data from useQuery is available
    if (!isLoading && data) {
      setTotalData(data);
    }
  }, [isLoading, data]);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg "></span>
      </div>
    );
  }

  return (
    <Container>
      {totalData.map((service, index) => (
        <MySingleService
          key={index}
          setTotalData={setTotalData}
          totalData={totalData}
          service={service}
        ></MySingleService>
      ))}
    </Container>
  );
};

export default MyServices;
