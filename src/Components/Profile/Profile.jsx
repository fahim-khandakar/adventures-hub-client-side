import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import profile from "../../assets/user.png";

const Profile = () => {
  const { user, name, photo } = useContext(AuthContext);
  return (
    <div>
      {user && (
        <div className="flex   gap-3 md:gap-5 items-center">
          <div className=" text-xs md:text-base text-center">
            {user.displayName ? user.displayName : name}
          </div>
          <div>
            {user.photoURL ? (
              <img
                className="w-[25px] md:w-[30px] rounded-full"
                src={user.photoURL}
                alt="Photo"
              />
            ) : photo ? (
              <img
                className="w-[20px] md:w-[30px] rounded-full"
                src={photo}
                alt="photo"
              />
            ) : (
              <img
                className="w-[20px] md:w-[30px] rounded-full"
                src={profile}
                alt="Photo"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
