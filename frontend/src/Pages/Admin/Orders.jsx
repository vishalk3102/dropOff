import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import MetaData from "../../Components/MetaData";

const Orders = () => {
  const usersData = [
    {
      trackingId: 1234,
      name: "vishal",
      address: "djhg rtsfdyws ys",
      quantity: 4,
      weight: 4,
      amount: 1200,
    },
    {
      trackingId: 1234,
      name: "vishal",
      address: "djhg rtsfdyws ys",
      quantity: 4,
      weight: 4,
      amount: 1200,
    },
    {
      trackingId: 1234,
      name: "vishal",
      address: "djhg rtsfdyws ys",
      quantity: 4,
      weight: 4,
      amount: 1200,
    },
    {
      trackingId: 1234,
      name: "vishal",
      address: "djhg rtsfdyws ys",
      quantity: 4,
      weight: 4,
      amount: 1200,
    },
    {
      trackingId: 1234,
      name: "vishal",
      address: "djhg rtsfdyws ys",
      quantity: 4,
      weight: 4,
      amount: 1200,
    },
  ];
  return (
    <>
      <MetaData title="Orders" />
      <section id="Orders" className="w-full h-full  mt-20">
        <div className="max-w-[1200px] w-[100%] mx-auto my-10">
          <h2
            className="text-[#000] text-[2.5rem] font-bold
              text-center uppercase p-2 mt-5"
          >
            Orders Stats
          </h2>
          <div className="">
            <table class="table-auto border-solid border-2 border-black border-collapse rounded mx-auto my-10">
              <thead>
                <tr className="w-[100%] border-solid border-2 border-black">
                  <th className="text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400  border border-slate-900 p-3 uppercase text-center">
                    Tracking Id
                  </th>
                  <th className="text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                    Receiver Name
                  </th>
                  <th className="text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                    Receiver Address
                  </th>
                  <th className="text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                    Weight
                  </th>
                  <th className="text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                    Quantity
                  </th>
                  <th className="text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                    Amount
                  </th>
                  <th className="text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((val) => {
                  return (
                    <>
                      <tr>
                        <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                          {val.trackingId}
                        </td>
                        <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                          {val.name}
                        </td>
                        <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                          {val.address}
                        </td>
                        <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                          {val.quantity}
                        </td>
                        <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                          {val.weight}
                        </td>
                        <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                          {val.amount}
                        </td>
                        <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                          <Link to="#">
                            <AiOutlineEye />
                          </Link>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Orders;
