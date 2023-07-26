import React from "react";
import { Link } from "react-router-dom";
// import easyinvoice from "easyinvoice";

const PaymentSuccess = () => {
  // FUNCTION FOR DOWNLOADING OF INVOICE
  // const downloadInvoice = async (booking) => {
  //   const data = {
  //     documentTitle: "INVOICE", //Defaults to INVOICE
  //     currency: "USD",
  //     taxNotation: "vat", //or gst
  //     marginTop: 25,
  //     marginRight: 25,
  //     marginLeft: 25,
  //     marginBottom: 25,
  //     logo: "link to show on your invoice",
  //     sender: {
  //       company: "Hotel",
  //       address: "4 W 13th St",
  //       zip: "10011",
  //       city: "New York",
  //       country: "United States",
  //     },
  //     client: {
  //       // company: `${booking.user.name}`,
  //       // address: `${booking.user.email}`,
  //       company: "booking.user.name",
  //       address: "booking.user.email",
  //       zip: "",
  //       // city: `Check In: ${new Date().toLocaleString("en-US")}`,
  //       // country: `Check In: ${new Date().toLocaleString("en-US")}`,
  //     },
  //     invoiceNumber: "booking.room.name",
  //     invoiceDate: "booking.room.name",
  //     products: [
  //       {
  //         quantity: "booking.room.name",
  //         description: "booking.room.name",
  //         tax: 0,
  //         price: "booking.room.pricePerNight",
  //         // quantity: `${booking.daysOfStay}`,
  //         // description: `${booking.room.name}`,
  //         // tax: 0,
  //         // price: booking.room.pricePerNight,
  //       },
  //     ],
  //     bottomNotice: "add message",
  //   };

  //   const result = await easyinvoice.createInvoice(data);
  //   easyinvoice.download(`invoice_1.pdf`, result.pdf);
  // };
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
              <h4 className="text-[1.4rem] md:text-[1.4rem] font-medium capitalize p-1">
                {" "}
                Your order number is <span>#12345566.</span>
              </h4>
              <p className="text-[1.2rem] md:text-[1.2rem] font-normal p-1 ">
                We have emailed your order confirmation, and will send you an
                update when your order has shipped.
              </p>
            </div>
            <div className="w-[400px] flex flex-col md:flex-row gap-4 justify-center items-center mx-auto my-10">
              <button className="h-[40px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer  bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]">
                <Link to={"/order/:id"}>Order Details</Link>
              </button>
              <button
                className="h-[40px] w-[180px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer  bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]"
                // onClick={() => downloadInvoice()}
              >
                download Invoice
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentSuccess;
