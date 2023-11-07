import { useQuery } from "@tanstack/react-query";
import Container from "../../Hooks/Container";
import SingleService from "../../Components/SingleService/SingleService";
import { useState } from "react";
import CapitalizeWords from "../../Hooks/CapitalizeWords";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const [count, setCount] = useState(6);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const { isLoading, data } = useQuery({
    queryKey: ["singleService", price, category],
    queryFn: () =>
      fetch(
        `https://adventures-hub.web.app/services?sortField=price&sortOrder=${price}&serviceName=${CapitalizeWords(
          category
        )}`
      ).then((res) => res.json()),
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.inputValue.value;
    setCategory(inputValue);
  };

  return (
    <Container>
      <Helmet>
        <title>Adventures Hub | Services</title>
      </Helmet>
      <form onSubmit={handleSearch}>
        <div className="join flex flex-col md:flex-row md:gap-0 gap-2  justify-center my-16">
          <div>
            <div>
              <input
                className="input w-full md:w-auto input-bordered join-item"
                name="inputValue"
                placeholder="Search"
              />
            </div>
          </div>
          <select
            onChange={(e) => setPrice(e.target.value)}
            className="select select-bordered join-item"
          >
            <option disabled selected>
              Filter
            </option>
            <option value="asc">From low to high</option>
            <option value="desc">From high to low</option>
          </select>
          <div className="indicator">
            <button type="submit" className="btn join-item">
              Search
            </button>
          </div>
        </div>
      </form>
      <div>
        {isLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg "></span>
          </div>
        ) : data.length <= 0 ? (
          <div className="flex justify-center">
            <img
              src="https://t4.ftcdn.net/jpg/04/75/01/23/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg"
              alt=""
            />
          </div>
        ) : (
          data
            .slice(0, count)
            .map((service, index) => (
              <SingleService key={index} service={service}></SingleService>
            ))
        )}
        <div className="flex justify-center my-5">
          {!isLoading && data.length > 6 && (
            <button
              onClick={() => setCount(data.length)}
              className={count > 6 ? "hidden" : "btn btn-warning"}
            >
              View More
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Services;
