import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillHome, AiFillCar } from "react-icons/ai";
import { BsFillBoxFill, BsEnvelopeFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import { trackOrderDetails } from "../../Redux/Actions/orderAction";

const TrackDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { track, loading } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(trackOrderDetails(params.id));
  }, [params.id, dispatch]);
  return (
    <>
      <section id="TrackDetails" className="h-full w-full">
        {loading === false && track !== undefined ? (
          <div className="max-w-[1200px] w-[100%] mx-auto">
            <div className="w-[100%] mx-auto bg-gray-200 border-2 border-solid rounded-[10px]">
              <div className="grid grid-cols-2 md:grid-cols-3">
                <div className="col-span-1 md:col-span-2 ">
                  <ul className="flex flex-col justify-center items-start p-2 ml-2 md:ml-5">
                    <li className="text-[0.9rem] md:text-[1rem] font-medium capitalize p-1 md:p-2">
                      {" "}
                      Order Status :{" "}
                      <span className="text-[0.7rem] md:text-[0.9rem] font-semibold ">
                        {"track.orderStatus"}
                      </span>
                    </li>
                    <li className="text-[0.9rem] md:text-[1rem] font-medium capitalize p-1 md:p-2">
                      {" "}
                      Expected Date :{" "}
                      <span className="text-[0.7rem] md:text-[0.9rem] font-semibold ">
                        12 July 2023
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-span-1 flex items-center justify-between ">
                  <button className="h-[40px] w-[150px] md:h-[40px] md:w-[200px] text-[0.8rem] md:text-[1rem] text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer my-3 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]">
                    <Link to={"/order/:id"}>Order Details</Link>
                  </button>
                </div>
              </div>
              <div className="">
                <ul className="grid grid-cols-6 p-4 my-6">
                  <li className="col-span-1 h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[50%] mx-auto text-center capitalize leading-3 ">
                    <AiOutlineShoppingCart size={30} />
                    <span className="text-[0.7rem] font-medium  my-1 md:my-2">
                      Order Placed
                    </span>
                  </li>
                  <li className="col-span-1 h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[50%] mx-auto text-center capitalize leading-3">
                    <RiAccountPinCircleFill size={30} />
                    <span className="text-[0.7rem] font-medium  my-2">
                      Driver Assigned
                    </span>
                  </li>
                  <li className="col-span-1 h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[50%] mx-auto text-center capitalize leading-3 ">
                    <BsFillBoxFill size={30} />
                    <span className="text-[0.7rem] font-medium  my-2">
                      Order Picked up
                    </span>
                  </li>
                  <li className="col-span-1 h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[50%] mx-auto text-center capitalize leading-3 ">
                    <AiFillCar size={30} />
                    <span className="text-[0.7rem] font-medium  my-2">
                      In Transit
                    </span>
                  </li>
                  <li className="col-span-1 h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[50%] mx-auto text-center capitalize leading-3 ">
                    <BsEnvelopeFill size={30} />
                    <span className="text-[0.7rem] font-medium  my-2">
                      out for delivery
                    </span>
                  </li>
                  <li className="col-span-1 h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[50%] mx-auto text-center capitalize leading-3 ">
                    <AiFillHome size={30} />
                    <span className="text-[0.7rem] font-medium  my-2">
                      Delivered
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default TrackDetails;
