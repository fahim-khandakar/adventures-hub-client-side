import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

/* eslint-disable react/prop-types */
const MyPending = ({ work }) => {
  const { _id, serviceTakingDate, servicePhoto, serviceName, status, price } =
    work;
  const notify = () => toast("Successfully Updated!");
  const handleConfirmation = (newStatus) => {
    axios
      .put(`http://localhost:5000/bookings/${_id}`, { work, status: newStatus })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          return notify();
        }
        // You can update the local state or perform other actions as needed
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={servicePhoto}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{serviceName}</div>
                </div>
              </div>
            </td>
            <td>{serviceTakingDate}</td>
            <td>{price}</td>
            <th>
              <select
                defaultValue={status}
                onChange={(e) => handleConfirmation(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </th>
          </tr>
        </tbody>
      </table>
      <Toaster />
    </div>
  );
};

export default MyPending;
