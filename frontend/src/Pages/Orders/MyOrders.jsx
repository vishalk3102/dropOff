import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import MetaData from "../../Components/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Loader from "../../Components/Loader";
import { getMyOrders } from "../../Redux/Actions/orderAction";

const MyOrders = () => {
  const dispatch = useDispatch();

  const { loading, orders, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    dispatch(getMyOrders());
  }, [dispatch, error]);

  // const usersData = [
  //   {
  //     trackingId: 1234,
  //     name: "vishal",
  //     address: "djhg rtsfdyws ys",
  //     quantity: 4,
  //     weight: 4,
  //     amount: 1200,
  //   },
  //   {
  //     trackingId: 1234,
  //     name: "vishal",
  //     address: "djhg rtsfdyws ys",
  //     quantity: 4,
  //     weight: 4,
  //     amount: 1200,
  //   },
  //   {
  //     trackingId: 1234,
  //     name: "vishal",
  //     address: "djhg rtsfdyws ys",
  //     quantity: 4,
  //     weight: 4,
  //     amount: 1200,
  //   },
  //   {
  //     trackingId: 1234,
  //     name: "vishal",
  //     address: "djhg rtsfdyws ys",
  //     quantity: 4,
  //     weight: 4,
  //     amount: 1200,
  //   },
  //   {
  //     trackingId: 1234,
  //     name: "vishal",
  //     address: "djhg rtsfdyws ys",
  //     quantity: 4,
  //     weight: 4,
  //     amount: 1200,
  //   },
  // ];

  return (
    <>
      <MetaData title="Orders" />
      <section id="Orders" className="w-full h-full  mt-20">
        {loading === false ? (
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
                      Order Id
                    </th>
                    <th className="text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                      Status
                    </th>
                    <th className="text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center">
                      Size
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
                  {orders &&
                    orders.map((i) => {
                      return (
                        <>
                          <tr key={i._id}>
                            <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                              {i._id}
                            </td>
                            <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                              {i.orderStatus}
                            </td>
                            <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                              {`${i.length} *${i.width} *${i.height}`}
                            </td>
                            <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                              {i.weight}
                            </td>
                            <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                              {i.quantity}
                            </td>
                            <td className="text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left">
                              {i.totalAmount}
                            </td>
                            <td className="text-[0.7rem] md:text-[1rem] font-normal text-center border border-slate-900 p-1 capitalize">
                              <Link to={`/order/${i._id}`}>
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
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default MyOrders;
