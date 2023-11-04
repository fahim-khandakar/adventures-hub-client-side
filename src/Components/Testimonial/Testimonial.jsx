/* eslint-disable react/no-unescaped-entities */
import Container from "../../Hooks/Container";
import { ImLocation2 } from "react-icons/im";

const Testimonial = () => {
  return (
    <Container>
      <div className="flex  flex-col md:flex-row items-center gap-10 mt-20">
        <div className="w-full md:w-2/3">
          <div>
            <h4>Testimonial</h4>
            <h1 className="text-3xl font-extrabold mt-5">
              What Say Our <br /> Clients About Us
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <div>
              <img
                className="w-[50px] h-[50px] object-cover rounded-full"
                src={`https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt=""
              />
              <h4 className="text-[#482551] font-bold text-xl my-5">
                I really love this family!
              </h4>
              <p className="text-[#482551]">
                I recently went on a guided tour with Adventures Hub, and it was
                an incredible experience! Our guide was knowledgeable and made
                the entire journey engaging and fun.
              </p>
            </div>
            <div>
              <img
                className="w-[50px] h-[50px] object-cover rounded-full"
                src={`https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt=""
              />
              <h4 className="text-[#482551] font-bold text-xl my-5">
                Japan was wonderful place!{" "}
              </h4>
              <p className="text-[#482551]">
                I had a great time on the tour organized by Adventures Hub. The
                destinations were beautiful, and the tour guide was informative.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <p className="flex gap-1 items-center">
            <ImLocation2></ImLocation2>
            <b className="text-[#482551]">From United States</b>
          </p>

          <h4 className="text-[#482551] my-5">This tour was fantastic!</h4>
          <p className="text-[#482551]">
            I recently went on a guided tour with Adventures Hub, and it was an
            incredible experience! Our guide was knowledgeable and made the
            entire journey engaging and fun. The itinerary was well-planned, and
            we got to explore breathtaking landscapes, learn about local
            culture, and enjoy delicious cuisine. I can't wait to book my next
            adventure with this fantastic team.
          </p>
          <img
            className="w-[50px] h-[50px] object-cover rounded-full mt-5"
            src={`https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
