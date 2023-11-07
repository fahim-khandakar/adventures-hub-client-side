import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Container from "../../Hooks/Container";
import MySingleService from "../../Components/MySingleService/MySingleService";
import { Helmet } from "react-helmet-async";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const [totalData, setTotalData] = useState([]);
  const email = user.email;
  const { isLoading, data } = useQuery({
    queryKey: ["myServices", totalData],
    queryFn: () =>
      fetch(
        `https://adventures-hub-server.vercel.app/myServices?email=${email}`,
        {
          credentials: "include",
        }
      ).then((res) => res.json()),
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
      <Helmet>
        <title>Adventures Hub | My Services</title>
      </Helmet>
      <h1 className="text-2xl md:text-5xl text-center my-10 underline font-bold text-[#482551]">
        Service <span className="text-[#c83d86]">Management</span>
      </h1>
      {totalData.length > 0 ? (
        totalData.map((service, index) => (
          <MySingleService
            key={index}
            setTotalData={setTotalData}
            totalData={totalData}
            service={service}
          ></MySingleService>
        ))
      ) : (
        <div className="flex justify-center">
          <img
            src="https://t4.ftcdn.net/jpg/04/75/01/23/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg"
            alt=""
          />
        </div>
      )}
    </Container>
  );
};

export default MyServices;
