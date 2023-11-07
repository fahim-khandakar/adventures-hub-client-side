import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CapitalizeWords from "../../Hooks/CapitalizeWords";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";

const UpdateService = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://adventures-hub-server.vercel.app/serviceDetails/${id}`, {
        withCredentials: true,
      })
      .then((res) => setData(res.data));
  }, [id]);

  const {
    email,
    userName,
    serviceArea,
    servicePhoto,
    serviceName,
    price,
    description,
  } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const servicePhoto = form.servicePhoto.value;
    const serviceName = CapitalizeWords(form.serviceName.value);
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const fullData = {
      servicePhoto,
      serviceName,
      price,
      serviceArea,
      description,
    };
    axios
      .put(
        `https://adventures-hub-server.vercel.app/updateService/${id}`,
        fullData
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          form.reset();
          return swal(
            "Success",
            "Your service was successfully Updated.",
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
  };
  return (
    <div>
      <Helmet>
        <title>Adventures Hub | Service Update</title>
      </Helmet>
      <h1 className="text-2xl md:text-5xl text-[#482551] font-bold text-center mt-5 ">
        Update Product
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img
              src="https://youraudiotour.com/assets/undraw_tour_guide-1592861593dde8d1182af5052ce775897ac357bf6756da4190b66843e73f51d2.svg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-[#482551]">
                      Tour Guide Name
                    </span>
                  </label>
                  <input
                    defaultValue={userName}
                    type="text"
                    className="input input-bordered"
                    disabled
                  />
                </div>

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

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-[#482551]">
                      Service Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={servicePhoto}
                    placeholder="Service Photo URL"
                    name="servicePhoto"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-[#482551]">
                      Service Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Service Name"
                    defaultValue={serviceName}
                    name="serviceName"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-[#482551]">
                      Price
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    defaultValue={price}
                    name="price"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-[#482551]">
                      Service Area
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Service Area"
                    defaultValue={serviceArea}
                    name="serviceArea"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[#482551]">
                    Description
                  </span>
                </label>
                <textarea
                  type="text"
                  placeholder="Description"
                  defaultValue={description}
                  name="description"
                  className="py-2 input input-bordered"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-warning">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
