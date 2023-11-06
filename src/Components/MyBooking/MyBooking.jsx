/* eslint-disable react/prop-types */

const MyBooking = ({ booking }) => {
  const {
    serviceTakingDate,
    yourInstruction,
    servicePhoto,
    serviceName,
    price,
    status,
  } = booking;
  return (
    <div className="shadow-lg p-5 rounded-md mt-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <img className="rounded-lg" src={servicePhoto} alt="" />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h1 className="text-[#482551] font-bold text-lg pb-2">
            <span>Service Name:</span> {serviceName}
          </h1>
          <h3 className="text-[#482551] text-xl font-bold pb-2">
            Taking Date: {serviceTakingDate}
          </h3>
          <h3 className="text-[#482551]">{yourInstruction}</h3>
          <div className="flex gap-5  items-center">
            <p className="font-bold text-[#482551]">Price: ${price}</p>
          </div>
          <p className="font-bold text-[#482551] mt-5">
            Booking Status: {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
