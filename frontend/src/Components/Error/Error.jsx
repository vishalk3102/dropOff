import React from "react";
import MetaData from "../../Components/MetaData";
import { NavLink } from "react-router-dom";
import errorImage from "../../Assets/error-img.jpg";

const Error = () => {
  return (
    <>
      {" "}
      <MetaData title="Not Found" />
      <section id="Error" className="w-full h-full ">
        <div className="w-[100%] h-[100%] max-w-[1200px] mx-auto">
          <div className="w-[100%] h-[60%] flex justify-center items-center">
            <img
              src={errorImage}
              alt=""
              className="w-[300px] h-[350px] md:w-[350px] md:h-[400px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3
              className="text-[#000] text-[1.2rem] md:text-[1.5rem] font-semibold  text-ce
           p-2 "
            >
              Sorry,the page you're looking for doesn't exist.
            </h3>
          </div>
          <NavLink to="/">
            <div className="h-[50px] w-[200px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer my-5 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]">
              Back to home
            </div>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Error;
