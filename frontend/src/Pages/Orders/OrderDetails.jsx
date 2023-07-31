import React from "react";
import MetaData from "../../Components/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOrderDetails } from "../../Redux/Actions/orderAction";
import Loader from "../../Components/Loader";
import easyinvoice from "easyinvoice";

const OrderDetails = () => {
  const params = useParams();

  const { order, loading } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [params.id, dispatch]);

  const downloadInvoice = async (booking) => {
    const data = {
      documentTitle: "INVOICE", //Defaults to INVOICE

      settings: {
        currency: "INR",
        taxNotation: "vat",
        marginTop: 25,
        marginRight: 25,
        marginLeft: 25,
        marginBottom: 25,
        format: "Letter",
        height: "1000px",
        width: "500px",
        orientation: "landscape",
      },
      images: {
        logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",
      },
      sender: {
        company: "DropOff",
        address: "Sector 215",
        zip: "412308",
        city: "Pune",
        country: "India",
      },
      client: {
        company: `${order.senderDetails.name}`,
        address: `${order.senderDetails.hNo}`,
        city: `${order.senderDetails.city}`,
        state: `${order.senderDetails.state}`,
        country: `${order.senderDetails.country}`,
        zip: `${order.senderDetails.pinCode}`,
      },
      information: {
        number: `${params.id}`,
        date: `${order.createdAt.split("T")[0]}`,
        "due-date": `${order.createdAt.split("T")[0]}`,
      },

      products: [
        {
          quantity: `${order.shippingItems.quantity}`,
          description: `Courier Package`,
          tax: 5,
          price: `${order.totalAmount}`,
        },
      ],
      bottomNotice: "add message",
    };
    const result = await easyinvoice.createInvoice(data);
    easyinvoice.download(`invoice_1.pdf`, result.pdf);
  };
  return (
    <>
      <MetaData title="Orderdetails" />
      <section id="Order-details" className="h-full w-full my-10">
        {loading === false && order !== undefined ? (
          <div className="max-w-[1200px] w-[100%] mx-auto">
            <div className="mb-5">
              <h2
                className="text-[#000] text-[1.5rem] md:text-[2.5rem] font-bold
          text-center uppercase p-2 mt-5"
              >
                Order Details
              </h2>
            </div>
            <div className="w-[90%] mx-auto bg-gray-200 border-2 border-solid rounded-[10px]">
              <div className="w-[80%]  mx-auto p-4">
                <h2 className="text-[1.1rem] md:text-[1.4rem] font-bold text-left capitalize">
                  Order Id :
                  <span className="font-semibold uppercase">{params.id}</span>
                </h2>
              </div>
              <hr className="w-[80%] mx-auto border-solid border-2 border-black" />
              <div className="grid grid-cols-2 md:grid-cols-4 w-[80%] mx-auto my-2">
                <div className="col-span-1 md:col-span-2 ">
                  <ul className="flex flex-col justify-center items-start p-4">
                    <li className="text-[0.9rem] md:text-[1rem] font-medium capitalize p-1 md:p-2">
                      {" "}
                      Date :{" "}
                      <span className="text-[0.7rem] md:text-[0.9rem] font-semibold ">
                        {order.createdAt.split("T")[0]}
                      </span>
                    </li>
                    <li className="text-[0.9rem] md:text-[1rem] font-medium capitalize p-1 md:p-2">
                      {" "}
                      Delivered At :{" "}
                      <span className="text-[0.7rem] md:text-[0.9rem] font-semibold ">
                        {order.deliveredAt
                          ? order.deliveredAt.split("T")[0]
                          : "NA"}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-span-1 md:col-span-2 ">
                  <ul className="flex flex-col justify-center items-start p-4">
                    <li className="text-[0.9rem] md:text-[1rem] font-medium capitalize p-1 md:p-2">
                      {" "}
                      Tracking Id :{" "}
                      <span className="text-[0.7rem] md:text-[0.9rem] font-semibold ">
                        {order.trackingID}
                      </span>
                    </li>
                    <li className="text-[0.9rem] md:text-[1rem] font-medium capitalize p-1 md:p-2">
                      {" "}
                      Order Status :{" "}
                      <span className="text-[0.7rem] md:text-[0.9rem] font-semibold ">
                        {order.orderStatus}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="w-[80%] mx-auto border-solid border-2 border-black" />
              <div className="grid grid-cols-4 w-[80%]  text-center border-solid border-2 border-black rounded-[5px] mx-auto my-5 p-3">
                <div className="col-span-1">
                  <h4 className="text-[0.9rem] md:text-[1rem] font-medium capitalize">
                    Size: <br />
                    <span className="text-[0.7rem] md:text-[0.9rem] font-semibold ">
                      {order.shippingItems.length}x{order.shippingItems.width}x
                      {order.shippingItems.height}
                    </span>
                  </h4>
                </div>
                <div className="col-span-1">
                  <h4 className="text-[0.9rem] md:text-[1rem] font-medium capitalize">
                    Quantity: <br />
                    <span className="text-[0.7rem] md:text-[0.9rem] font-semibold ">
                      {order.shippingItems.quantity}
                    </span>
                  </h4>
                </div>
                <div className="col-span-1">
                  <h4 className="text-[0.9rem] md:text-[1rem] font-medium capitalize">
                    Weight: <br />
                    <span className="text-[0.7rem] md:text-[0.9rem] font-semibold ">
                      {order.shippingItems.weight}
                    </span>
                  </h4>
                </div>
                <div className="col-span-1">
                  <h4 className="text-[0.9rem] md:text-[1rem] font-medium capitalize">
                    Total: <br />
                    <span className="text-[0.7rem] md:text-[0.9rem] font-semibold ">
                      {order.totalAmount}
                    </span>
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-0 w-[80%] mx-auto my-5">
                <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center md:items-start">
                  <div className="w-[95%] flex flex-col justify-center items-start border-solid border-2 border-black rounded-[5px] p-4">
                    <h3 className="text-[1rem] font-medium   capitalize">
                      Sender Details
                    </h3>
                    <br />
                    <p className="text-[0.9rem] font-medium  ">
                      {" "}
                      Name:{" "}
                      <span className="font-normal capitalize">
                        {order.senderDetails.name}
                      </span>
                    </p>
                    <p className="text-[0.9rem] font-medium  capitalize">
                      {" "}
                      Phone No:{" "}
                      <span className="font-normal">
                        {" "}
                        {order.senderDetails.phoneNo}
                      </span>
                    </p>
                    <p className="text-[0.9rem] font-medium  capitalize">
                      {" "}
                      Address:{" "}
                      <span className="font-normal">
                        {`${order.senderDetails.hNo}  ${order.senderDetails.city} ${order.senderDetails.state}${order.senderDetails.country}${order.senderDetails.pinCode}`}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center md:items-end">
                  <div className="w-[95%] flex flex-col justify-center items-start border-solid border-2 border-black rounded-[5px] p-4">
                    <h3 className="text-[1rem] font-medium   capitalize">
                      Receiver Details
                    </h3>
                    <br />
                    <p className="text-[0.9rem] font-medium  capitalize">
                      {" "}
                      Name:{" "}
                      <span className="font-normal">
                        {" "}
                        {order.receiverDetails.name}
                      </span>
                    </p>
                    <p className="text-[0.9rem] font-medium  capitalize">
                      {" "}
                      Phone No:{" "}
                      <span className="font-normal">
                        {" "}
                        {order.receiverDetails.phoneNo}
                      </span>
                    </p>
                    <p className="text-[0.9rem] font-medium  capitalize">
                      {" "}
                      Address:{" "}
                      <span className="font-normal">
                        {`${order.receiverDetails.hNo} ${order.receiverDetails.city} ${order.receiverDetails.state}${order.receiverDetails.country}${order.receiverDetails.pinCode}`}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mx-auto my-10">
                <button
                  className="h-[40px] w-[180px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer  bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]"
                  onClick={() => downloadInvoice()}
                >
                  download Invoice
                </button>
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

export default OrderDetails;
