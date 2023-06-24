import React from "react";
import MetaData from "../../Components/MetaData";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <MetaData title="Login" />
      <section id="Login" className="h-full w-full">
        <div className="w-[100%] h-[100%] max-w-[1200px] mx-auto my-20 p-10">
          <NavLink to="/login">
            <div className="h-[50px] w-[200px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer mt-10 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]">
              Login with
              <span className="p-3">
                <FcGoogle size={24} />
              </span>
            </div>
          </NavLink>
          <div className="flex flex-col justify-center items-center p-4 my-2">
            <h3
              className="text-[#000] text-[1.2rem] md:text-[1.5rem] font-semibold  text-ce
          capitalize p-2 "
            >
              Need Help ?
            </h3>
            <h2
              className="text-[#000] text-[0.8rem] md:text-[1rem] font-bold    text-ce
          uppercase p-4  "
            >
              Customer support
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
