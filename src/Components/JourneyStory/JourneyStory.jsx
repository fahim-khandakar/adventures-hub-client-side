/* eslint-disable react/no-unescaped-entities */
import Container from "../../Hooks/Container";
import { SlCalender } from "react-icons/sl";
import { FcBusinessman } from "react-icons/fc";

const JourneyStory = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-10 mt-20">
        <div className="w-full md:w-1/2 ">
          <img
            className="rounded-3xl"
            src="https://cdn.britannica.com/06/96306-050-DFE8AFDC/Khao-Tapu-Ao-Phang-na-Thailand-National-Park.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 text-[#482551]">
          <p>A Story about a journey</p>
          <h1 className="text-2xl md:text-5xl font-bold my-3">
            Thailand trip in <br /> December
          </h1>
          <div className="flex items-center gap-10">
            <p className="flex items-center gap-2">
              <SlCalender></SlCalender> <span>jan-06-2023</span>
            </p>
            <p className="flex items-center gap-2">
              <FcBusinessman></FcBusinessman> <span>Fahim Khandakar</span>
            </p>
          </div>
          <p className="my-5">
            Thailand's allure is irresistible – from the vibrant street markets
            of Bangkok to the tranquil temples of Chiang Mai and the pristine
            beaches of Phuket.
          </p>
          <p className="mt-5">
            Our journey was a sensory feast of culture, cuisine, and natural
            beauty. We explored bustling cityscapes, embraced the serenity of
            ancient temples, and indulged in the sun-kissed pleasures of
            tropical islands. Thailand, a land of smiles and enchantment, left
            us with unforgettable memories that will forever beckon us back.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default JourneyStory;
