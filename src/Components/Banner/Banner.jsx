import { useLottie } from "lottie-react";
import Container from "../../Hooks/Container";
import animation from "../../assets/Animation - 1699124045943.json";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Banner = () => {
  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <Container>
      <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
        <div className="w-full md:w-1/2">{View}</div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-7xl font-bold text-[#c83d86]">
            Explore The World With
            <span className="text-[#482551]"> Adventures Hub</span>
          </h1>
          <p className="mt-5 text-[#482551] font-semibold">
            Welcome to Adventures Hub, where every trip is an exhilarating
            odyssey waiting to unfold. Whether you seek adrenaline-pumping
            escapades or serene escapes, our expertly crafted adventures cater
            to all types of travelers. Explore the world with confidence, guided
            by our passionate team of adventurers. Your next unforgettable
            journey begins here, at Adventures Hub.
          </p>
          <Link to="/register">
            <button className="btn btn-sm md:btn btn-warning md:btn-warning mt-5 font-bold">
              Register Now <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
