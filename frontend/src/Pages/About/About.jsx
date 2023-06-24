import React from "react";
import MetaData from "../../Components/MetaData";
import aboutImage1 from "../../Assets/about-image-1.jpg";
import aboutImage2 from "../../Assets/about-image-2.jpg";

const About = () => {
  return (
    <>
      <MetaData title="About" />
      <section id="about" className="w-full h-full ">
        <h2
          className="text-[#000] text-[2.5rem] font-bold
          text-center uppercase p-2 mt-5"
        >
          About Us
        </h2>
        <div className="h-[100%] w-[100%] max-w-[1200px] grid grid-cols-2 p-5 mx-auto mt-10">
          <h2 className="flex justify-center md:hidden col-span-2 text-[1.8rem] md:text-[2.2rem] text-[#000] font-bold uppercase px-3">
            WHO ARE WE?
          </h2>
          <div className="col-span-2 md:col-span-1 order-2 md:order-1 h-[80%]">
            <h2 className="hidden md:flex  col-span-2 text-[1.8rem] md:text-[2.2rem] text-[#000] font-bold uppercase px-3">
              WHO ARE WE?
            </h2>
            <p className="text-[0.8rem] md:text-[1rem] font-normal leading-7 p-4 mt-4 my-auto">
              We are India’s largest fully integrated logistics provider. We aim
              to build the operating system for commerce, through a combination
              of world-class infrastructure, logistics operations of the highest
              quality and cutting-edge engineering and technology capabilities.
            </p>
          </div>
          <div className="flex justify-center items-center col-span-2 md:col-span-1  h-[100%] md:h-[80%] w-[100%] order-1 md:order-2 ">
            <img
              src={aboutImage1}
              alt=""
              className=" h-[80%] w-[80%] md:h-[100%] md:w-[100%]"
            />
          </div>
        </div>
        <div className="h-[100%] w-[100%] max-w-[1200px] grid grid-cols-2 p-5 mx-auto mb-10">
          <h2 className="flex justify-center md:hidden col-span-2 text-[1.8rem] md:text-[2.2rem] text-[#000] font-bold uppercase px-3">
            OUR MISSION
          </h2>
          <div className=" col-span-2 md:col-span-1 order-2 md:order-2 h-[80%]">
            <h2 className="hidden md:flex  col-span-2 text-[1.8rem] md:text-[2.2rem] text-[#000] font-bold uppercase px-3">
              OUR MISSION
            </h2>
            <p className="text-[0.8rem] md:text-[1rem] font-normal leading-7 p-4 mt-4 my-auto">
              Our mission is to enable customers to operate flexible, reliable
              and resilient supply chains at the lowest costs. We provided
              supply chain solutions to a diverse base of over 27000 active
              customers. This is achieved through high-quality logistics
              infrastructure and network engineering, a vast network of domestic
              and global partners and significant investments in automation, all
              of which are orchestrated by our self-developed logistics
              operating system that drive network synergies within and across
              our services and enhance our value proposition to customers.
            </p>
          </div>
          <div className="flex justify-center items-center col-span-2 md:col-span-1  h-[100%] md:h-[100%] w-[100%] order-1 md:order-1 ">
            <img
              src={aboutImage2}
              alt=""
              className=" h-[80%] w-[80%] md:h-[100%] md:w-[100%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
