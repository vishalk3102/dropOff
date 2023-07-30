import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillHome, AiFillCar } from "react-icons/ai";
import { BsFillBoxFill, BsEnvelopeFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import { trackOrderDetails } from "../../Redux/Actions/orderAction";
import TrackStepper from "./Stepper";
import VerticalStepper from "./VerticalStepper";

const TrackDetails = () => {
  /*  const params = useParams();
  const dispatch = useDispatch();

  const { track, loading } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(trackOrderDetails(params.id));
  }, [params.id, dispatch]); */

  const [active, setActive] = useState(true);
  const [completed, setcompleted] = useState(true);
  return (
    <>
      <section id="TrackDetails" className="h-full w-full">
        {/* {loading === false && track !== undefined ? ( */}
        <div className="max-w-[1200px] w-[100%] mx-auto">
          <div className="w-[90%] mx-auto  border-2 border-solid rounded-[20px]">
            <div className="grid grid-cols-2 md:grid-cols-3 mt-4">
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
            <div className="grid grid-cols-6 w-[90%] mx-auto my-10">
              <div className="h-[150px] col-span-6 md:col-span-1 flex flex-col md:flex-row justify-between  items-center">
                <hr className="w-[20%]" />
                <div className="col-span-1 h-[90px] w-[90px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center   rounded-[50%] mx-auto text-center capitalize leading-3 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]">
                  <RiAccountPinCircleFill size={30} />
                  <span className="text-[0.7rem] font-medium  my-2">
                    Order <br /> Placed
                  </span>
                </div>
                <hr className="rotate-90 md:rotate-0 border-[2px] border-solid border-[#feb21a] w-[15%] md:w-[20%] " />
              </div>
              <div className="h-[150px] col-span-6 md:col-span-1 flex flex-col md:flex-row justify-between  items-center">
                <hr className="rotate-90 md:rotate-0 border-2 border-solid border-[#feb21a] w-[20%]" />
                <div
                  className={`col-span-1 h-[90px] w-[90px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center   rounded-[50%] mx-auto text-center capitalize leading-3      ${
                    active === true
                      ? "bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]"
                      : "bg-slate-300"
                  }  `}
                >
                  <RiAccountPinCircleFill size={30} />
                  <span className="text-[0.7rem] font-medium  my-2">
                    Driver <br /> Assigned
                  </span>
                </div>
                <hr
                  className={`rotate-90 md:rotate-0 border-[2px] border-solid border-slate-400 w-[15%] md:w-[20%] ${
                    active === true
                      ? "bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]"
                      : "bg-slate-300"
                  }  `}
                />
              </div>
              <div className="h-[150px] col-span-6 md:col-span-1 flex flex-col md:flex-row justify-between  items-center">
                <hr className="rotate-90 md:rotate-0 border-[2px] border-solid border-slate-400 w-[20%]" />
                <div className="col-span-1 h-[90px] w-[90px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center rounded-[50%] mx-auto text-center capitalize leading-3 bg-slate-300">
                  <RiAccountPinCircleFill size={30} />
                  <span className="text-[0.7rem] font-medium  my-2">
                    Order <br /> Picked up
                  </span>
                </div>
                <hr className="rotate-90 md:rotate-0 border-[2px] border-solid border-slate-400 w-[15%] md:w-[20%]" />
              </div>
              <div className="h-[150px] col-span-6 md:col-span-1 flex flex-col md:flex-row justify-between  items-center">
                <hr className="rotate-90 md:rotate-0 border-[2px] border-solid border-slate-400 w-[20%]" />
                <div className="col-span-1 h-[90px] w-[90px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center rounded-[50%] mx-auto text-center capitalize leading-3 bg-slate-300">
                  <RiAccountPinCircleFill size={30} />
                  <span className="text-[0.7rem] font-medium  my-2">
                    In Transit
                  </span>
                </div>
                <hr className="rotate-90 md:rotate-0 border-[2px] border-solid border-slate-400 w-[15%] md:w-[20%]" />
              </div>
              <div className="h-[150px] col-span-6 md:col-span-1 flex flex-col md:flex-row justify-between  items-center">
                <hr className="rotate-90 md:rotate-0 border-[2px] border-solid border-slate-400 w-[15%] md:w-[20%]" />
                <div className="col-span-1 h-[90px] w-[90px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center rounded-[50%] mx-auto text-center capitalize leading-3 bg-slate-300">
                  <RiAccountPinCircleFill size={30} />
                  <span className="text-[0.7rem] font-medium  my-2">
                    out for <br /> delivery
                  </span>
                </div>
                <hr className="rotate-90 md:rotate-0 border-2 border-solid border-slate-400 w-[15%] md:w-[20%]" />
              </div>
              <div className="h-[150px] col-span-6 md:col-span-1 flex flex-col md:flex-row justify-between  items-center">
                <hr className="rotate-90 md:rotate-0 border-2 border-solid border-slate-400 w-[15%] md:w-[20%]" />
                <div className="col-span-1 h-[90px] w-[90px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center rounded-[50%] mx-auto text-center capitalize leading-3 bg-slate-300">
                  <RiAccountPinCircleFill size={30} />
                  <span className="text-[0.7rem] font-medium  my-2">
                    Delivered
                  </span>
                </div>
                <hr className=" w-[20%]" />
              </div>

              {/* <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[50%] mx-auto text-center capitalize leading-3  before:content-[''] before:absolute before:left-[13%] before:border-solid before:border-2 before:border-black before:w-[80px] ">
                <AiOutlineShoppingCart size={30} />
                <span className="text-[0.7rem] font-medium  my-1 md:my-2">
                  Driver Assigned
                </span>
              </div>
              <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[50%] mx-auto text-center capitalize leading-3  before:content-[''] before:absolute before:left-2/3 before:border-solid before:border-2 before:border-black before:w-[80px] ">
                <BsFillBoxFill size={30} />
                <span className="text-[0.7rem] font-medium  my-2">
                  Order Picked up
                </span>
              </div>
              <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[50%] mx-auto text-center capitalize leading-3  before:content-[''] before:absolute before:left-2/3 before:border-solid before:border-2 before:border-black before:w-[80px] ">
                <AiFillCar size={30} />
                <span className="text-[0.7rem] font-medium  my-2">
                  In Transit
                </span>
              </div>
              <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[50%] mx-auto text-center capitalize leading-3  before:content-[''] before:absolute before:left-2/3 before:border-solid before:border-2 before:border-black before:w-[80px] ">
                <BsEnvelopeFill size={30} />
                <span className="text-[0.7rem] font-medium  my-2">
                  out for delivery
                </span>
              </div>
              <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center border-solid border-2 border-black rounded-[50%] mx-auto text-center capitalize leading-3  before:content-[''] before:absolute before:left-[13%] before:border-solid before:border-2 before:border-black before:w-[80px] ">
                <AiFillHome size={30} />
                <span className="text-[0.7rem] font-medium  my-2">
                  Delivered
                </span>
              </div> */}
            </div>
          </div>
        </div>
        ){/* : ( */}
        {/* <Loader /> */}
        {/* )}  */}
      </section>
    </>
  );
};

export default TrackDetails;
