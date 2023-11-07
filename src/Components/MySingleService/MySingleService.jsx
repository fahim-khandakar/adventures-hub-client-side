import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

/* eslint-disable react/prop-types */
const MySingleService = ({ service, totalData, setTotalData }) => {
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
  const handleDelete = async () => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this service?",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      swal("Deleted!", "Your imaginary file has been deleted!", "success");
      axios
        .delete(`https://adventures-hub.web.app/services/${_id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            const remaining = totalData.map((item) => item.id !== _id);
            setTotalData(remaining);
            return swal(
              "Success",
              "Your service was successfully deleted.",
              "success"
            );
          } else {
            return swal(
              "Error!",
              "Something went wrong. Please try again later.",
              "error"
            );
          }
        });
    }
  };

  return (
    <div className="shadow-lg p-5 rounded-md">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <img className="rounded-lg" src={servicePhoto} alt="" />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h1 className="text-[#482551] font-bold text-2xl pb-2">
            <span>Service Name:</span> {serviceName}
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
              className="w-[50px] h-[50px] object-cover rounded-full "
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
          <Link to={`/updateService/${_id}`}>
            <button className="btn btn-sm btn-warning md:btn-md  md:btn-warning">
              Edit
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-sm btn-warning md:btn-md  md:btn-warning"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySingleService;
