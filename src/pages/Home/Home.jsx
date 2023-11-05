import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import JourneyStory from "../../Components/JourneyStory/JourneyStory";
import SpecialOffers from "../../Components/SpecialOffers/SpecialOffers";
import Testimonial from "../../Components/Testimonial/Testimonial";
import HomeServices from "../Services/HomeServices";
import axios from "axios";
import Container from "../../Hooks/Container";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get("/data.json").then((res) => setServices(res.data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <HomeServices key={index} service={service}></HomeServices>
          ))}
        </div>
      </Container>
      <SpecialOffers></SpecialOffers>
      <JourneyStory></JourneyStory>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
