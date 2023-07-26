import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import Package from "./Package";
import Summary from "./Summary";
import PaymentSuccess from "./PaymentSuccess";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../Redux/Store";
import { paymentVerification } from "../../Redux/Actions/orderAction";

const steps = ["Address", "Package", "Summary"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Package />;
    case 2:
      return <Summary />;
    default:
      throw new Error("Unknown step");
  }
}

// function to load razorpay checkout script
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    senderDetails,
    receiverDetails,
    shippingItems,
    shippingcharges,
    totalAmount,
  } = useSelector((state) => state.ship);

  const { message, error } = useSelector((state) => state.order);

  const submitOrderHandler = async (e) => {
    e.preventDefault();

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const {
      data: { order, orderOptions },
    } = await axios.post(
      `${server}/createorderonline`,
      {
        senderDetails,
        receiverDetails,
        shippingItems,
        shippingcharges,
        totalAmount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    const options = {
      key: "rzp_test_UpZWBJjZ2chrfa",
      amount: order.amount,
      currency: "INR",
      name: "VISHAL KUMAR",
      description: "DropOff",
      order_id: order.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);

        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;

        dispatch(
          paymentVerification(
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
            orderOptions
          )
        );
      },
      theme: {
        color: "#9c003c",
      },
    };
    var razorPay = new window.Razorpay(options);
    razorPay.open();
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/paymentsuccess");
    }
    if (error) {
      toast.error(message);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, navigate, error, message]);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = async () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Shipping
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <PaymentSuccess />
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={submitOrderHandler}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Place order
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Checkout;
