import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillHome, AiFillCar } from "react-icons/ai";
import { BsFillBoxFill, BsEnvelopeFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import { trackOrderDetails } from "../../Redux/Actions/orderAction";

const TrackDetails = () => {
  const [active, setActive] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();

  const { track, loading } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(trackOrderDetails(params.id));
  }, [params.id, dispatch]);

  const steps = [
    {
      id: 1,
      title: "Order Placed",
      icons: <RiAccountPinCircleFill size={30} />,
    },

    {
      id: 2,
      title: "Driver Assigned",
      icons: <RiAccountPinCircleFill size={30} />,
    },

    {
      id: 3,
      title: " Order Picked Up",
      icons: <BsFillBoxFill size={30} />,
    },

    {
      id: 4,
      title: "In Transit",
      icons: <AiFillCar size={30} />,
    },

    {
      id: 5,
      title: "Out for Delivery",
      icons: <BsEnvelopeFill size={30} />,
    },

    {
      id: 6,
      title: "Order Delivered",
      icons: <AiFillHome size={30} />,
    },
  ];

  const orderStatus = "In Transit";

  useEffect(() => {
    let statusArray = [
      "Order Placed",
      "Driver Assigned",
      "Order Picked Up",
      "In Transit",
      "Out for Delivery",
      "Order Delivered",
    ];
    for (let i = 0; i < statusArray.length; i++) {
      if (statusArray[i] === orderStatus) {
        setActive(i + 1);
      }
    }
  }, [active]);

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
              {steps.map((i) => {
                return (
                  <>
                    <div
                      key={i.id}
                      className="h-[150px] col-span-6 md:col-span-1 flex flex-col md:flex-row justify-between  items-center"
                    >
                      <hr
                        className={`${
                          i.id === 1
                            ? "w-[20%]"
                            : "rotate-90 md:rotate-0 border-[2px] border-solid border-slate-400 w-[20%]"
                        }  
                        ${
                          active === i.id ? "border-[#feb21a] " : "bg-slate-300"
                        } ${
                          i.id < active ? "border-[#feb21a]" : "bg-slate-300"
                        }`}
                      />
                      <div
                        className={`col-span-1 h-[90px] w-[90px] md:h-[100px] md:w-[100px] flex flex-col justify-center items-center rounded-[50%] mx-auto text-center capitalize leading-3 bg-slate-300 ${
                          active === i.id
                            ? "bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]"
                            : "bg-slate-300"
                        } ${
                          i.id < active
                            ? "bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]"
                            : "bg-slate-300"
                        }`}
                      >
                        {i.icons}
                        <span className="text-[0.7rem] font-medium  my-2">
                          {i.title}
                        </span>
                      </div>
                      <hr
                        className={`${
                          i.id === 6
                            ? "w-[15%] md:w-[20%] "
                            : "rotate-90 md:rotate-0 border-[2px] border-solid border-slate-400 w-[15%] md:w-[20%]"
                        }  ${
                          active === i.id ? "border-[#feb21a] " : "bg-slate-300"
                        } ${
                          i.id < active ? "border-[#feb21a]" : "bg-slate-300"
                        } `}
                      />
                    </div>
                  </>
                );
              })}
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
