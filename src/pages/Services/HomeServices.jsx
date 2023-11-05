/* eslint-disable react/prop-types */

const HomeServices = ({ service }) => {
  const {
    serviceProviderName,
    serviceProviderLocation,
    shortDescriptionAboutServiceProvider,
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProviderImage,
    servicePrice,
  } = service;
  console.log(serviceProviderLocation);
  return (
    <div className="shadow-lg p-5 rounded-md">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <img
            className="rounded-lg"
            src="https://worldstrides.com/wp-content/uploads/2018/09/Dubrovnik-Croatia.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-[#482551] font-bold text-lg pb-2">
            {serviceName}
          </h1>
          <h3 className="text-[#482551]">{serviceDescription}</h3>
          <div className="flex gap-5 md:h-full items-center pb-6 ">
            <p className="font-bold text-[#482551]">Price: ${servicePrice}</p>
            <button className="btn btn-sm btn-warning">Details</button>
          </div>
        </div>
      </div>
      {/* provider  */}
      <div className="flex gap-5 items-center mt-5">
        <div>
          <img
            className="w-[50px] h-[50px] object-cover rounded-full "
            src={`https://images.unsplash.com/photo-1611637576109-b6f76185ec9b?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-[#482551] text-lg">
            {serviceProviderName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
