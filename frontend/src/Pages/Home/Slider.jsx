import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import sliderData from "../../Data/sliderData";
import trackimg from "../../Assets/track-image.png";
import shipmentimg from "../../Assets/shipment-image.png";
import rateimg from "../../Assets/rate-image.png";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <>
      {/* <slider /> */}
      <section id="Hero" className="w-full h-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          //   navigation={true}
          //   pagination={{ clickable: true }}
          speed={3000}
          loop={true}
          autoplay={{ delay: 7000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {sliderData.map((val) => {
            return (
              <SwiperSlide key={val.id}>
                <div className="w-[100%] h-[600px]">
                  <img
                    src={val.url}
                    alt=""
                    className="w-full h-[100%] opacity-75"
                  />
                  <div className="w-[100%] h-[100%] md:h-[100%]  bg-gray-900 opacity-20 absolute top-0">
                    {" "}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="Hero-container h-[50%] w-[100%] absolute top-[40%] z-10 mx-auto">
          <h3 className="text-[#fff] text-[1.8rem] md:text-[2.2rem] font-semibold text-center capitalize p-4 mb-10">
            Where now meets next
          </h3>
          <div className="">
            <ul className="flex justify-center items-center">
              <li className="h-[125px] w-[150px] md:h-[150px] md:w-[200px] flex flex-col justify-center items-center p-5 hover:cursor-pointer bg-[#fff] ">
                <NavLink
                  to="/calculaterate"
                  className="flex flex-col justify-center items-center"
                >
                  <img src={rateimg} alt="" className="h-[50px] w-[50px]" />
                  <span className="text-[#000] text-center text-[0.8rem] uppercase font-medium p-2 mt-2 ">
                    Calculate charges
                  </span>
                </NavLink>
              </li>
              <li className="h-[125px] w-[150px] md:h-[150px] md:w-[200px] flex flex-col justify-center items-center p-5 hover:cursor-pointer  bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]">
                <NavLink
                  to="/track"
                  className="flex flex-col justify-center items-center"
                >
                  <img src={trackimg} alt="" className="h-[50px] w-[50px] " />
                  <span className="text-[#000] text-center text-[0.8rem] uppercase font-medium p-2 mt-2">
                    track
                  </span>
                </NavLink>
              </li>
              <li className="h-[125px] w-[150px] md:h-[150px] md:w-[200px] flex flex-col justify-center items-center p-5 hover:cursor-pointer bg-[#fff]">
                <NavLink
                  to="/ship"
                  className="flex flex-col justify-center items-center"
                >
                  <img src={shipmentimg} alt="" className="h-[50px] w-[50px]" />
                  <span className="text-[#000] text-center text-[0.8rem] uppercase font-medium p-2 mt-2">
                    ship
                  </span>
                </NavLink>
              </li>
            </ul>
            <div className=""></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
