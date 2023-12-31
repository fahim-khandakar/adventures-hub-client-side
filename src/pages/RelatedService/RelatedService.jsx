import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Container from "../../Hooks/Container";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const RelatedService = () => {
  const { id } = useParams();
  const [related, setRelated] = useState([]);
  const [relatedService, setRelatedService] = useState([]);

  useEffect(() => {
    axios
      .get(`https://adventures-hub-server.vercel.app/serviceDetails/${id}`, {
        withCredentials: true,
      })
      .then((res) => setRelated(res.data));
  }, [id]);

  const {
    _id,
    userPhoto,
    userName,
    serviceArea,
    servicePhoto,
    serviceName,
    price,
    description,
  } = related;

  useEffect(() => {
    if (related.serviceName) {
      axios
        .get(
          `https://adventures-hub-server.vercel.app/relatedService?serviceName=${related.serviceName}`,
          { withCredentials: true }
        )
        .then((res) => setRelatedService(res.data));
    }
  }, [related.serviceName]);
  return (
    <Container>
      <Helmet>
        <title>Adventures Hub | Related Service</title>
      </Helmet>
      {relatedService.length > 0 ? (
        <div className="shadow-lg p-5 rounded-md">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/2">
              <img className="rounded-lg" src={servicePhoto} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-[#482551] font-bold text-lg pb-2">
                Service Name: {serviceName}
              </h1>
              <h3 className="text-[#482551] text-4xl font-bold pb-2">
                {serviceArea}
              </h3>
              <h3 className="text-[#482551]">{description}</h3>
            </div>
          </div>

          {/* provider  */}
          <div className="flex gap-5 items-center justify-between mt-5">
            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-[30px] h-[30px] object-cover rounded-full "
                  src={userPhoto}
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-bold text-[#482551] text-lg">{userName}</h2>
              </div>
            </div>
            <div className="flex gap-5  items-center">
              <p className="font-bold text-[#482551]">Price: ${price}</p>
              <Link to={`/serviceDetails/${_id}`}>
                <button className="btn btn-sm btn-warning">For Booking</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-5">
          <img
            src="https://t4.ftcdn.net/jpg/04/75/01/23/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg"
            alt=""
          />
        </div>
      )}
      <div>
        <h1 className="text-xl underline text-center mt-10 md:text-3xl font-semibold text-[#482551]">
          Related Service Data
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {relatedService.length > 1 ? (
            relatedService.map((item, index) => {
              return (
                <div key={index} className="shadow-lg p-5 rounded-md my-16">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2">
                      <img className="rounded-lg" src={servicePhoto} alt="" />
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/2">
                      <h1 className="text-[#482551] font-bold text-lg pb-2">
                        <span>Service Name:</span> {item.serviceName}
                      </h1>
                    </div>
                  </div>
                  {/* provider  */}
                  <div className="flex gap-5 items-center justify-between mt-5">
                    <div className="flex gap-5 items-center">
                      <div>
                        <img
                          className="w-[25px] h-[25px] object-cover rounded-full "
                          src={userPhoto}
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="font-bold text-[#482551] text-xs">
                          {item.userName}
                        </h2>
                      </div>
                    </div>
                    <div className="flex gap-5  items-center">
                      <p className="font-bold text-xs text-[#482551]">
                        Price: ${item.price}
                      </p>
                      <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-sm btn-warning md:btn-md  md:btn-warning">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center col-span-3">
              <img
                src="https://t4.ftcdn.net/jpg/04/75/01/23/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default RelatedService;
