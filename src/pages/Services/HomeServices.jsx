/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HomeServices = ({ service }) => {
  const {
    _id,
    userPhoto,
    userName,
    serviceArea,
    servicePhoto,
    serviceName,
    price,
    description,
  } = service;

  return (
    <div className="shadow-lg p-5 rounded-md">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <img className="rounded-lg" src={servicePhoto} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-[#482551] font-bold text-lg pb-2">
            {serviceName}
          </h1>
          <h3 className="text-[#482551] font-bold pb-2">{serviceArea}</h3>
          <h3 className="text-[#482551]">{description.slice(0, 100)}...</h3>
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
            <button className="btn btn-sm btn-warning">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
