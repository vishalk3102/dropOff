import React from "react";
import { NavLink } from "react-router-dom";
import serviceImage from "../../Assets/service-img-1.gif";
const Services = () => {
  return (
    <>
      <section id="services" className="w-full h-full ">
        <div className="h-[100%] w-[100%] max-w-[1200px] grid grid-cols-2 p-5 mx-auto mt-10">
          <h2 className="flex md:hidden col-span-2 text-[1.8rem] md:text-[2.2rem] text-[#000] font-bold uppercase px-3">
            Services
          </h2>
          <div className="col-span-2 md:col-span-1 order-2 md:order-1 h-[80%]">
            <h2 className="hidden md:flex  col-span-2 text-[1.8rem] md:text-[2.2rem] text-[#000] font-bold uppercase px-3">
              Services
            </h2>
            <p className="text-[0.8rem] md:text-[1rem] font-normal leading-7 p-4 my-auto">
              DropOff aim is to build the operating system for commerce. We
              provide express parcel transportation, PTL and TL freight,
              cross-border and supply chain services to over 27000 customers,
              including large & small e-commerce participants, SMEs, and other
              leading enterprises & brands. Our supply chain platform and
              logistics operations bring flexibility, breadth, efficiency and
              innovation to our customers’ supply chain and logistics. Our
              operations, infrastructure and technology enable our customers to
              transact with us and our partners at low costs.
            </p>
            <div className="h-[40px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer my-3 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]">
              <NavLink to="/services">Know More</NavLink>
            </div>
          </div>
          <div className="flex justify-center items-center col-span-2 md:col-span-1  h-[100%] md:h-[80%] w-[100%] order-1 md:order-2 ">
            <img
              src={serviceImage}
              alt=""
              className=" h-[80%] w-[80%] md:h-[100%] md:w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
