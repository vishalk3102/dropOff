import React from "react";
import Marquee from "react-fast-marquee";

const TopNavbar = () => {
  return (
    <>
      <section id="TopNavbar">
        <div className="w-[100%] h-[3rem]  mx-auto bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]">
          <Marquee
            className="text-[1rem] font-medium p-2 mx-auto"
            onCycleComplete={null}
          >
            <span className="font-[800] text-[1rem]"> IMPORTANT : </span>
            Please do not transfer money if the payment link is not shared via
            DropOff's official SMS ID. OTP/credentials not required for address
            confirmation. Our customer support team can be reached only via our
            official website (enter phone number and login), please do not
            attempt to contact through any other manner.
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default TopNavbar;
