import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Container from "../../Hooks/Container";
import { useContext, useRef } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import swal from "sweetalert";

const ServiceDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const clientEmail = user.email;
  const dialogRef = useRef(null);

  const { isLoading, data } = useQuery({
    queryKey: ["serviceDetails"],
    queryFn: () =>
      fetch(`http://localhost:5000/serviceDetails/${id}`).then((res) =>
        res.json()
      ),
  });
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg "></span>
      </div>
    );
  }

  const {
    email,
    userPhoto,
    userName,
    serviceArea,
    servicePhoto,
    serviceName,
    price,
    description,
  } = data;

  //   handleBooking
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const yourInstruction = form.yourInstruction.value;
    const serviceTakingDate = form.serviceTakingDate.value;
    const status = "Pending";
    console.log(status);
    const fullData = {
      email,
      clientEmail,
      servicePhoto,
      serviceName,
      price,
      yourInstruction,
      serviceTakingDate,
      status,
    };
    axios.post("http://localhost:5000/bookings", fullData).then((res) => {
      if (res.data.insertedId) {
        form.reset();
        dialogRef.current.close();
        swal("success", "Your Booking done successfully!", "success");
      }
    });
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      ) : (
        <Container>
          <div className="flex flex-col md:flex-row gap-10 items-center my-10">
            {/* service provider info */}
            <div className="shadow-lg p-5 w-full md:w-2/5">
              <div>
                <img
                  className="w-[200px] mx-auto h-[200px] object-cover rounded-full "
                  src={userPhoto}
                  alt=""
                />
              </div>
              <h1 className="text-center font-semibold text-[#482551] text-xl py-5">
                Tour Provider: {userName}
              </h1>
              <p className="text-center font-semibold text-[#482551] text-xl py-5">
                Next Tour: {serviceArea}
              </p>
            </div>
            {/* service info  */}
            <div className="w-full md:w-3/5">
              <div className="shadow-lg p-5 rounded-md">
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-full md:w-1/2">
                    <img className="rounded-lg" src={servicePhoto} alt="" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h1 className="text-[#482551] font-bold text-lg pb-2">
                      Service Name: {serviceName}
                    </h1>

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
                      <h2 className="font-bold text-[#482551] text-lg">
                        {userName}
                      </h2>
                    </div>
                  </div>
                  <div className="flex gap-5  items-center">
                    <p className="font-bold text-[#482551]">Price: ${price}</p>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                      className="btn btn-sm btn-warning"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog
            id="my_modal_5"
            ref={dialogRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form onSubmit={handleBooking}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* user email  */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-[#482551]">
                        Your Email
                      </span>
                    </label>
                    <input
                      defaultValue={user.email}
                      type="text"
                      className="input input-bordered"
                      disabled
                    />
                  </div>

                  {/* guide email  */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-[#482551]">
                        Tour Guide Email
                      </span>
                    </label>
                    <input
                      defaultValue={email}
                      type="text"
                      className="input input-bordered"
                      disabled
                    />
                  </div>

                  {/* service photo  */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-[#482551]">
                        Service Photo URL
                      </span>
                    </label>
                    <input
                      defaultValue={servicePhoto}
                      disabled
                      type="text"
                      className="input input-bordered"
                    />
                  </div>

                  {/* service name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-[#482551]">
                        Service Name
                      </span>
                    </label>
                    <input
                      type="text"
                      defaultValue={serviceName}
                      className="input input-bordered"
                      disabled
                    />
                  </div>

                  {/* price */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-[#482551]">
                        Price
                      </span>
                    </label>
                    <input
                      type="text"
                      defaultValue={price}
                      className="input input-bordered"
                      disabled
                    />
                  </div>

                  {/* service taking date  */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold text-[#482551]">
                        Service Taking Date
                      </span>
                    </label>
                    <input
                      type="date"
                      name="serviceTakingDate"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                {/* description  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-[#482551]">
                      Your Instruction
                    </span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Write here..."
                    name="yourInstruction"
                    className="py-2 input input-bordered"
                    required
                  ></textarea>
                </div>

                <div className="w-full mt-5">
                  <button className="btn btn-warning w-full" type="submit">
                    Purchase
                  </button>
                </div>
              </form>
              <div className="modal-action justify-center md:justify-end">
                <form method="dialog">
                  {/* input field start here  */}

                  {/* if there is a button in form, it will close the modal */}
                  <button
                    className="btn"
                    onClick={() => dialogRef.current.close()}
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </Container>
      )}
    </div>
  );
};

export default ServiceDetails;
