import React from "react";
import Typography from "@mui/material/Typography";

const PaymentSuccess = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #12345566. <br /> We have emailed your order
        confirmation, and will send you an update when your order has shipped.
      </Typography>
    </>
  );
};

export default PaymentSuccess;
