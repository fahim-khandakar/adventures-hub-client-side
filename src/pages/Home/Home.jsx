import Banner from "../../Components/Banner/Banner";
import JourneyStory from "../../Components/JourneyStory/JourneyStory";
import SpecialOffers from "../../Components/SpecialOffers/SpecialOffers";
import Testimonial from "../../Components/Testimonial/Testimonial";
import HomeServices from "../Services/HomeServices";
import Container from "../../Hooks/Container";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { useState } from "react";

const Home = () => {
  // const [services, setServices] = useState([]);

  const { isLoading, data } = useQuery({
    queryKey: ["homeServices"],
    queryFn: () =>
      fetch("https://adventures-hub-server.vercel.app/services").then((res) =>
        res.json()
      ),
  });

  return (
    <div>
      <Helmet>
        <title>Adventures Hub | Home</title>
      </Helmet>
      <Banner></Banner>
      <Container>
        <h1 className="text-2xl text-[#482551] underline text-center my-20 md:text-5xl font-bold">
          <span className="text-[#c83d86]">Popular</span> Tour Services
        </h1>
        {isLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg "></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {data.slice(0, 4).map((service, index) => (
              <HomeServices key={index} service={service}></HomeServices>
            ))}
          </div>
        )}
        <NavLink className="flex justify-center my-10" to="/services">
          <button className="btn btn-warning">Show All</button>
        </NavLink>
      </Container>
      <SpecialOffers></SpecialOffers>
      <JourneyStory></JourneyStory>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
