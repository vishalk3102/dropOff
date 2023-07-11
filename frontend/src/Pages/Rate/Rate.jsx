import React from "react";
import MetaData from "../../Components/MetaData";

const Rate = () => {
  return (
    <>
      {" "}
      <MetaData title="Rate" />
      <section id="Rate" className="h-full w-full">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-[#000] text-[2.5rem] font-bold
          text-center uppercase p-2 mt-5"
          >
            Calculate Shipping Charges
          </h2>
          <div className=" w-[60%] my-10 mx-auto">
            <div className="flex flex-col bg-gray-200  border-solid border-2 m-[3px]">
              <label className="uppercase text-[0.8rem] font-medium p-1">
                From :
                <input
                  className="w-full text-[1.4rem] capitalize p-2 bg-gray-200 outline-none"
                  type="text"
                  placeholder=""
                  name="name"
                  // value=""
                  // onChange=""
                  required
                />
              </label>
            </div>
            <div className="flex flex-col bg-gray-200  border-solid border-2 m-[3px]">
              <label className="uppercase text-[0.8rem] font-medium p-1">
                To :
                <input
                  className="w-full text-[1.4rem] capitalize p-2 bg-gray-200 outline-none"
                  type="text"
                  placeholder=""
                  name="name"
                  // value=""
                  // onChange=""
                  required
                />
              </label>
            </div>
          </div>
          <div className=" w-[60%] my-10 mx-auto">
            <h5
              className="text-[#000] text-[1rem] font-medium
           uppercase p-2 mt-5"
            >
              Tell us more about your shipment
            </h5>
            <div className="flex flex-col bg-gray-200  border-solid border-2 m-[3px]">
              <label className="uppercase text-[0.8rem] font-medium p-1">
                Packaging :
                <input
                  className="w-full text-[1.4rem] capitalize py-2 bg-gray-200"
                  type="text"
                  placeholder="Your Packaging"
                  name="name"
                  // value=""
                  // onChange=""
                  required
                />
              </label>
            </div>
          </div>
          <div className=" w-[60%] my-10 mx-auto">
            <div className="grid grid-cols-4   ">
              <div className="col-span-4 sm:col-span-2 md:col-span-1 flex flex-col  m-[3px]">
                <label className="bg-gray-200 uppercase text-[0.8rem] font-medium p-1  border-solid border-b-2 border-black">
                  No of packages <br /> Max 40
                </label>
                <input
                  className="w-full text-[1.4rem] capitalize py-2 bg-gray-200 outline-none"
                  type="text"
                  // placeholder="Your Packaging"
                  name="name"
                  // value=""
                  // onChange=""
                  required
                />
              </div>
              <div className="col-span-4 sm:col-span-2 md:col-span-1 flex flex-col bg-gray-200 m-[3px]">
                <label className="bg-gray-200 uppercase text-[0.8rem] font-medium p-1  border-solid border-b-2 border-black">
                  weights per package <br /> Max weight 68kg
                </label>
                <input
                  className="w-full text-[1.4rem] capitalize py-2 bg-gray-200 outline-none"
                  type="text"
                  name="name"
                  // placeholder="Your Packaging"
                  // value=""
                  // onChange=""
                  required
                />
              </div>
              <div className="col-span-4 sm:col-span-4 md:col-span-2 flex flex-col bg-gray-200 m-[3px]">
                <label className="bg-gray-200 uppercase text-[0.8rem] font-medium p-1  border-solid border-b-2 border-black">
                  Dimensions per package <br /> L × W × H
                </label>
                <input
                  className="w-full text-[1.4rem] capitalize py-2 bg-gray-200 outline-none"
                  type="text"
                  name="name"
                  // placeholder="Your Packaging"
                  // value=""
                  // onChange=""
                  required
                />
              </div>
            </div>
            <div className="h-[40px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer mt-10 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]">
              Show Rates
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rate;
