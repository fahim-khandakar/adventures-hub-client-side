import Container from "../../Hooks/Container";

const SpecialOffers = () => {
  return (
    <Container>
      <div className="mt-20 text-center">
        <h1 className="font-bold text-2xl underline md:text-5xl text-[#482551] ">
          <span className="text-[#c83d86]">Special</span> Offers
        </h1>
        <p className="text-[#482551] mt-5">
          Explore our limited-time special offers, <br /> where you can enjoy
          amazing discounts on handpicked tours and unforgettable experiences.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* first card  */}
        <div className="card  bg-base-100    shadow-xl image-full md:col-span-2">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&q=80&w=1623&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">France</h2>
            <p>Starting from: $1500</p>
            <div className="card-actions">
              <button className="btn btn-warning">Explore</button>
            </div>
          </div>
        </div>
        {/* second card  */}
        <div className="card  bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Belgium</h2>
            <p>Starting from: $1400</p>
            <div className="card-actions ">
              <button className="btn btn-warning">Explore</button>
            </div>
          </div>
        </div>
        {/* third card  */}
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://www.andbeyond.com/wp-content/uploads/sites/5/maldives-six-senses-laamu4.jpg"
              alt="Maldives"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Muldives</h2>
            <p>Starting from: $1450</p>
            <div className="card-actions ">
              <button className="btn btn-warning">Explore</button>
            </div>
          </div>
        </div>
        {/* fourth card  */}
        <div className="card  bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1496939376851-89342e90adcd?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="singapur"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Singapur</h2>
            <p>Starting from: $1600</p>
            <div className="card-actions ">
              <button className="btn btn-warning">Explore</button>
            </div>
          </div>
        </div>
        {/* fifth card  */}
        <div className="card  bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://worldstrides.com/wp-content/uploads/2018/09/Dubrovnik-Croatia.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Crotia</h2>
            <p>Starting from: $1300</p>
            <div className="card-actions ">
              <button className="btn btn-warning">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SpecialOffers;
