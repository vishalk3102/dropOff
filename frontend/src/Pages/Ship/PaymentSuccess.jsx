import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PaymentSuccess = () => {
  const { order } = useSelector((state) => state.orders);

  return (
    <>
      <section id="Order-details" className="h-full w-full my-10">
        <div className="max-w-[1200px] w-[100%] mx-auto">
          <div className="w-[90%] mx-auto bg-gray-200 border-2 border-solid rounded-[10px] p-5 my-20">
            <div className="w-[80%]  mx-auto p-4 mb-2">
              <h2 className="text-[1.6rem] md:text-[2rem] font-bold text-center uppercase">
                Thank you for your order.
              </h2>
            </div>
            <div className="text-center">
              {/*  <h4 className="text-[1.4rem] md:text-[1.4rem] font-medium capitalize p-1">
                {" "}
                Your order number is <span>{order._id}</span>
              </h4> */}
              <p className="text-[1.2rem] md:text-[1.2rem] font-normal p-1 ">
                We have emailed your order confirmation, and will send you an
                update when your order has shipped.
              </p>
            </div>
            <div className="w-[400px] flex flex-col md:flex-row gap-4 justify-center items-center mx-auto my-10">
              <button className="h-[40px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer  bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]">
                <Link to={"/order/:id"}>Order Details</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentSuccess;
