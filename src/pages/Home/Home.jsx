import Banner from "../../Components/Banner/Banner";
import JourneyStory from "../../Components/JourneyStory/JourneyStory";
import SpecialOffers from "../../Components/SpecialOffers/SpecialOffers";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SpecialOffers></SpecialOffers>
      <JourneyStory></JourneyStory>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
