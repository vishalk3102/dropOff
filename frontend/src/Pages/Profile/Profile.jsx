import React from "react";
import MetaData from "../../Components/MetaData";
// import profile from "../../Assets/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/userAction";
import Loader from "../../Components/Loader";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <MetaData title="Profile" />
      <section id="Profile" className="w-full h-full">
        {loading === false ? (
          <div className="max-w-[1200px] w-[100%] h-[100%] mx-auto flex justify-center items-center my-20 py-10 ">
            <div className="grid grid-cols-3 w-[80%] md:w-[60%]  border-solid border-2 border-black rounded-[10px] bg-white ">
              <div className="col-span-3 md:col-span-1 flex justify-center items-center">
                <div className="p-5 my-2">
                  <img
                    src={user.photo}
                    alt=""
                    srcset=""
                    className="h-[175px] w-[175px] rounded-[50%]"
                  />
                  <h3 className="text-[1rem] md:text-[1.2rem] font-bold text-center p-2 mt-4 ">
                    {user.name}
                  </h3>
                </div>
              </div>
              <div className="col-span-3 md:col-span-2 flex flex-col justify-center">
                <ul className="md:ml-10 p-2 md:p-4 text-center md:text-left">
                  <li className="text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1">
                    User Id :
                    <span className="font-medium p-1">{user.googleId}</span>
                  </li>
                  <li className="text-[0.8rem] md:text-[1rem] font-semibold p-2 my-1">
                    Role :<span className="font-medium p-1">{user.role}</span>
                  </li>
                </ul>
                <div className="flex flex-col md:flex-row justify-around p-5 md:ml-10">
                  <div
                    className="h-[40px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] my-1"
                    onClick={logoutHandler}
                  >
                    Logout
                  </div>
                  {user.role === "admin" ? (
                    <div className="h-[40px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] my-1">
                      <Link to={"/admin/dashboard"}>Dashboard</Link>
                    </div>
                  ) : (
                    <div className="h-[40px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] my-1">
                      <Link to={"/myorders"}>Orders</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default Profile;
