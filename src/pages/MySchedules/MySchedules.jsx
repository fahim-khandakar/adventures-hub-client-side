import { useContext, useEffect, useState } from "react";
import Container from "../../Hooks/Container";
import { AuthContext } from "../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import MyBooking from "../../Components/MyBooking/MyBooking";
import MyPending from "../../Components/MyPending/MyPending";

const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [pending, setPending] = useState([]);
  const email = user.email;
  const { isLoading, data } = useQuery({
    queryKey: ["myBookings"],
    queryFn: () =>
      fetch(`http://localhost:5000/myBookings?email=${email}`).then((res) =>
        res.json()
      ),
  });

  const { isLoading: isLoadingPending, data: dataPending } = useQuery({
    queryKey: ["myPendings"],
    queryFn: () =>
      fetch(`http://localhost:5000/myPending?email=${email}`).then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    // Set totalData when data from useQuery is available
    if (!isLoadingPending && dataPending) {
      setPending(dataPending);
    }
  }, [isLoadingPending, dataPending]);

  useEffect(() => {
    // Set totalData when data from useQuery is available
    if (!isLoading && data) {
      setBookings(data);
    }
  }, [isLoading, data]);

  if (isLoadingPending) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg "></span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg "></span>
      </div>
    );
  }
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-10 my-10">
        {/* my bookings */}
        <div className="w-full md:w-1/2 ">
          <h1 className="text-2xl md:text-5xl font-bold text-center text-[#482551] underline">
            My Bookings
          </h1>
          <div>
            {bookings.map((booking, index) => (
              <MyBooking key={index} booking={booking}></MyBooking>
            ))}
          </div>
        </div>

        {/* my pending */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-5xl text-center font-bold text-[#482551] underline">
            My Pending Works
          </h1>
          <div>
            {pending.map((work, index) => (
              <MyPending key={index} work={work}></MyPending>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MySchedules;
