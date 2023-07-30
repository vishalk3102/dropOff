import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MetaData from "../../Components/MetaData";
import { FiSend } from "react-icons/fi";
import contactImage from "../../Assets/contact-image-1.jpg";
import { submitContactForm } from "../../Redux/Actions/userAction";

const Contact = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm(name, email, phone, message));
    console.log("clicked");
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
              <form>
                <div className="flex flex-col bg-gray-200  border-solid border-2 rounded-lg  my-[6px]">
                  <label className="capitalize text-[0.8rem] font-medium p-1 ">
                    Full Name :
                    <input
                      className="w-full text-[1.4rem] capitalize p-1 bg-gray-200 focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder=""
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                  ></textarea>
                </div>{" "}
                <button
                  type="submit"
                  className="h-[50px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer my-3 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]"
                  onClick={handleSubmit}
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
