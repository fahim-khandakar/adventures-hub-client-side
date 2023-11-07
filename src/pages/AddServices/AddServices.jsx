import { useContext } from "react";
import Container from "../../Hooks/Container";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import CapitalizeWords from "../../Hooks/CapitalizeWords";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  const userPhoto = user.photoURL;
  const userName = user.displayName;
  const email = user.email;

  const addService = (e) => {
    e.preventDefault();
    const form = e.target;
    const servicePhoto = form.servicePhoto.value;
    const serviceName = CapitalizeWords(form.serviceName.value);
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const fullData = {
      userPhoto,
      userName,
      email,
      servicePhoto,
      serviceName,
      price,
      serviceArea,
      description,
    };
    axios
      .post("https://adventures-hub.web.app/services", fullData)
      .then((res) => {
        if (res.data.insertedId) {
          form.reset();
          return swal(
            "Success",
            "Your service was successfully added.",
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
    <Container>
      <Helmet>
        <title>Adventures Hub | Add Service</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img
              src="https://youraudiotour.com/assets/undraw_tour_guide-1592861593dde8d1182af5052ce775897ac357bf6756da4190b66843e73f51d2.svg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={addService} className="card-body">
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
                  name="description"
                  className="py-2 input input-bordered"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-warning">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddServices;
