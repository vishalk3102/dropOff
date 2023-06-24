import React, { useState } from "react";
import MetaData from "../../Components/MetaData";
import { FiSend } from "react-icons/fi";
import contactImage from "../../Assets/contact-image-1.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  // function to handle if there is any change in contact form
  const handleChange = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    console.log(name + ":" + value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console("submitted");
  };

  return (
    <>
      <MetaData title="Contact" />
      <section id="Contact" className="w-full h-full ">
        <div className="h-[100%] w-[100%] max-w-[1200px] grid grid-cols-2 p-5 mx-auto mt-10">
          <h2 className="flex justify-center md:hidden col-span-2 text-[1.8rem] md:text-[2.2rem] text-[#000] font-bold uppercase px-3">
            Contact Us
          </h2>
          <div className="col-span-2 md:col-span-1 order-2 md:order-1 h-[100%]">
            <h2 className="hidden md:flex  col-span-2 text-[1.8rem] md:text-[2.2rem] text-[#000] font-bold uppercase px-3">
              Contact Us
            </h2>
            <div className=" w-[100%] my-5 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col bg-gray-200  border-solid border-2 rounded-lg  my-[6px]">
                  <label className="capitalize text-[0.8rem] font-medium p-1 ">
                    Full Name :
                    <input
                      className="w-full text-[1.4rem] capitalize p-1 bg-gray-200 focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder=""
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col bg-gray-200  border-solid border-2 rounded-lg  my-[6px]">
                  <label className="capitalize text-[0.8rem] font-medium p-1 ">
                    Email :
                    <input
                      className="w-full text-[1.4rem] capitalize p-1 bg-gray-200 focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder=""
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col bg-gray-200  border-solid border-2 rounded-lg  my-[6px]">
                  <label className="capitalize text-[0.8rem] font-medium p-1 ">
                    Phone no :
                    <input
                      className="w-full text-[1.4rem] capitalize p-1 bg-gray-200 focus:outline-none focus:shadow-outline"
                      type="Number"
                      placeholder=""
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col bg-gray-200  border-solid border-2 rounded-lg my-[6px]">
                  <label className="capitalize text-[0.8rem] font-medium p-1 ">
                    Message :
                  </label>
                  <textarea
                    className="w-full md:w-[100%] h-32 bg-gray-200 mt-2 p-3  focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder=""
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                  ></textarea>
                </div>{" "}
                <button
                  type="submit"
                  className="h-[50px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer my-3 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]"
                >
                  Submit
                  <span className="p-1 mx-2">
                    <FiSend size={20} />
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center items-center col-span-2 md:col-span-1  h-[100%] md:h-[100%] w-[100%] order-1 md:order-2 ">
            <img
              src={contactImage}
              alt="contactImage"
              className=" h-[80%] w-[80%] md:h-[100%] md:w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
