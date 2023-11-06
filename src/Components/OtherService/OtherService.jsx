/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const OtherService = ({ otherData }) => {
  const { _id, userPhoto, userName, servicePhoto, serviceName, price } =
    otherData;
  console.log(otherData);
  return (
    <div className="shadow-lg p-5 rounded-md">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <img className="rounded-lg" src={servicePhoto} alt="" />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h1 className="text-[#482551] font-bold text-lg pb-2">
            <span>Service Name:</span> {serviceName}
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
            <h2 className="font-bold text-[#482551] text-xs">{userName}</h2>
          </div>
        </div>
        <div className="flex gap-5  items-center">
          <p className="font-bold text-xs text-[#482551]">Price: ${price}</p>
          <Link to={`/relatedService/${_id}`}>
            <button className="btn btn-sm btn-warning md:btn-md  md:btn-warning">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherService;
