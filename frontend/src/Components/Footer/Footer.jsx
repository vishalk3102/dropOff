import React from "react";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <>
      <section className="w-[100%] h-full bg-black ">
        <div className="max-w-[1200px] w-[100%] grid grid-cols-6 mx-auto">
          <div className="col-span-6 sm:col-span-6  md:col-span-2 flex justify-center items-center">
            <div className="m-2">
              <h1 className="text-[3rem] text-[#fff] font-bold bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] text-transparent bg-clip-text">
                DropOff
              </h1>
              <p className="text-[#fff] text-[0.8rem] font-normal py-2">
                ISO 9001: 2015, ISO 27001: 2013 Certified Company
                <br /> CIN: L63090DL2011PLC221234
              </p>
            </div>
          </div>
          <div className=" col-span-3 sm:col-span-3 md:col-span-1 flex flex-col justify-center items-center p-2">
            <h4 className="text-[#fedb28] text-center text-[0.8rem] font-medium p-2 capitalize">
              Quick Links
            </h4>
            <ul className="text-[#fff] text-[0.8rem] font-normal p-1 m-2 capitalize">
              <li className="text-[#fff] text-center md:text-left">
                <Link to="navbar">Home</Link>
              </li>
              <li className="text-[#fff] text-center md:text-left">
                <Link to="navbar">About</Link>
              </li>
              <li className="text-[#fff] text-center md:text-left">
                <Link to="navbar">Services</Link>
              </li>
              <li className="text-[#fff] text-center md:text-left">
                <Link to="navbar">Pricing</Link>
              </li>
              <li className="text-[#fff] text-center md:text-left">
                <Link to="navbar">Track</Link>
              </li>
            </ul>
          </div>
          <div className=" col-span-3 sm:col-span-3 md:col-span-1 flex flex-col justify-center items-center p-2">
            <h4 className="text-[#fedb28] text-center text-[0.8rem] font-medium p-2 capitalize">
              Get In Touch
            </h4>
            <ul className="text-[#fff] text-[0.8rem] font-normal p-1 m-2 capitalize">
              <li className="text-[#fff] text-center md:text-left">
                <Link to="navbar">Contact</Link>
              </li>
              <li className="text-[#fff] text-center md:text-left">
                <Link to="navbar">Careers</Link>
              </li>
              <li className="text-[#fff] text-center md:text-left">
                <Link to="navbar">Support</Link>
              </li>
              <li className="text-[#fff] text-center md:text-left">
                <Link to="navbar">Raise a Query</Link>
              </li>
              <li className="text-[#fff] text-center md:text-left">
                <Link to="navbar">Start Shipping</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-6 md:col-span-2 flex flex-col justify-center  p-2">
            <h4 className="text-[#fedb28]  text-[0.8rem] font-medium capitalize p-1">
              Information Security Policy
            </h4>
            <p className="text-[#fff]  text-[0.8rem] font-normal p-2">
              Delhivery is committed to safeguarding the confidentiality,
              integrity and availability of all physical and electronic
              information assets of the organization. We ensure that the
              regulatory, operational and contractual requirements are
              fulfilled.
            </p>
            <h5 className="text-[#fedb28]  text-[0.8rem] font-medium p-2 capitalize">
              Disclaimer
            </h5>
            <p className="text-[#fff]  text-[0.8rem] font-normal p-2">
              Operational metrics listed are as of June 30, 2021
            </p>
          </div>

          {/* bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] */}

          {/* <div className=" col-span-6  sm:col-span-6 md:col-span-1">
            <h4 className="text-[#fff] text-center text-[1.2rem] font-medium p-2 capitalize mx-5 my-2">
              Follow Us
            </h4>
            <ul className="flex justify-center items-center p-2 m-2">
              <li className=" p-2 m-1 hover:cursor-pointer hover:scale-105">
                <a
                  href="https://www.instagram.com/ieee.geu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram size={20} color="#C13584" />
                </a>
              </li>
              <li className=" p-2 m-1 hover:cursor-pointer hover:scale-105">
                <a
                  href="https://www.linkedin.com/in/ieee-geu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={20} color="#0A66C2" />
                </a>
              </li>
              <li className=" p-2 m-1 hover:cursor-pointer hover:scale-105">
                <a
                  href="https://github.com/ieeegeu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub size={20} color="#000" />
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="border-solid border-t-2 border-[#fedb28]">
          <p className="bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] text-transparent bg-clip-text text-[1rem] font-bold text-center p-4 ">
            Copyright@DropOff-2023
          </p>
        </div>
      </section>
    </>
  );
};

export default Footers;
