import React, { useState, useEffect } from "react";
import MetaData from "../../Components/MetaData";
import servicesData from "../../Data/servicesData";

const Services = () => {
  const [menu, setMenu] = useState(servicesData);

  const handleMenuClick = (categoryItems) => {
    const updatedItems = servicesData.filter((currElement) => {
      return currElement.category === categoryItems;
    });
    setMenu(updatedItems);
  };

  useEffect(() => {
    return () => {
      handleMenuClick("express");
    };
  }, []);

  return (
    <>
      {" "}
      <MetaData title="Services" />
      <section id="services" className="w-full h-full ">
        <div className="w-[100%] h-[100%] max-w-[1200px] mx-auto">
          <h2
            className="text-[#000] text-[2.5rem] font-bold
          text-center uppercase p-2 mt-5"
          >
            Our Services
          </h2>
          <p className="text-[#000] text-center text-[1.2rem] font-medium mb-5">
            Making the world a smaller place
          </p>
          <div className="grid grid-cols-3 my-5">
            <button
              className="col-span-1 uppercase text-center font-semibold text-[0.8rem] md:text-[1rem] text-[#000]   hover:cursor-pointer p-1 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] border-solid border-2 border-black"
              onClick={() => handleMenuClick("express")}
            >
              Express Parcel
            </button>
            <button
              className="col-span-1 uppercase text-center font-semibold text-[0.8rem] md:text-[1rem] text-[#000]   hover:cursor-pointer p-1 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] border-solid border-2 border-black"
              onClick={() => handleMenuClick("partial")}
            >
              Partial-Truckload freight
            </button>
            <button
              className="col-span-1 uppercase text-center font-semibold text-[0.8rem] md:text-[1rem] text-[#000]   hover:cursor-pointer p-1 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] border-solid border-2 border-black"
              onClick={() => handleMenuClick("truckload")}
            >
              Truckload freight
            </button>
          </div>
          {menu.map((val) => {
            return (
              <>
                <div
                  key={val.id}
                  className="h-[100%] w-[100%] max-w-[1200px] grid grid-cols-2 p-5 mx-auto mt-10"
                >
                  <h2 className="flex justify-center   md:hidden col-span-2  text-[1.8rem] md:text-[2.2rem] text-[#000] font-bold uppercase px-3">
                    {val.title}
                  </h2>
                  <div className="col-span-2 md:col-span-1 order-2 md:order-1 h-[80%]">
                    <h2 className="hidden md:flex  col-span-2 text-center text-[1.8rem] md:text-[2.2rem] text-[#000] font-bold uppercase px-3">
                      {val.title}
                    </h2>
                    <p className="text-[0.8rem] md:text-[1rem] font-normal leading-7 p-4 mt-4 my-auto">
                      {val.desc}
                    </p>
                  </div>
                  <div className="flex justify-center items-center col-span-2 md:col-span-1  h-[100%] md:h-[80%] w-[100%] order-1 md:order-2 ">
                    <img
                      src={val.imgSrc}
                      alt={val.title}
                      className=" h-[80%] w-[80%] md:h-[100%] md:w-[100%]"
                    />
                  </div>
                </div>
              </>
            );
          })}{" "}
          <div className="h-[40px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer mb-5 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]">
            Contact Us
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
