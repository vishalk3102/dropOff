import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Payment = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div className="">
          Total Amount: <span>200</span>
        </div>
        <div className="h-[40px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer mb-5 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%] my-10">
          Proceed to pay
        </div>
      </Box>
    </>
  );
};

export default Payment;
