import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const AddressForm = () => {
  const { senderDetails, receiverDetails } = useSelector((state) => state.ship);

  const [senderName, setSenderName] = useState(senderDetails.name);
  const [senderHNo, setSenderHNo] = useState(senderDetails.hNo);
  const [senderCity, setSenderCity] = useState(senderDetails.city);
  const [senderState, setSenderState] = useState(senderDetails.state);
  const [senderCountry, setSenderCountry] = useState(senderDetails.country);
  const [senderPinCode, setSenderPinCode] = useState(senderDetails.pinCode);
  const [senderPhoneNo, setSenderPhoneNo] = useState(senderDetails.phoneNo);

  const [receiverName, setReceiverName] = useState(receiverDetails.name);
  const [receiverHNo, setReceiverHNo] = useState(receiverDetails.hNo);
  const [receiverCity, setReceiverCity] = useState(receiverDetails.city);
  const [receiverState, setReceiverState] = useState(receiverDetails.state);
  const [receiverCountry, setReceiverCountry] = useState(
    receiverDetails.country
  );
  const [receiverPinCode, setReceiverPinCode] = useState(
    receiverDetails.pinCode
  );
  const [receiverPhoneNo, setReceiverPhoneNo] = useState(
    receiverDetails.phoneNo
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "addSenderInfo",
      payload: {
        senderName,
        senderHNo,
        senderCity,
        senderState,
        senderCountry,
        senderPinCode,
        senderPhoneNo,
      },
    });
    dispatch({
      type: "addReceiverInfo",
      payload: {
        receiverName,
        receiverHNo,
        receiverCity,
        receiverState,
        receiverCountry,
        receiverPinCode,
        receiverPhoneNo,
      },
    });
  }, [
    dispatch,
    senderName,
    senderHNo,
    senderCity,
    senderState,
    senderCountry,
    senderPinCode,
    senderPhoneNo,
    receiverName,
    receiverHNo,
    receiverCity,
    receiverState,
    receiverCountry,
    receiverPinCode,
    receiverPhoneNo,
  ]);

  return (
    <>
      <Typography variant="h7" gutterBottom>
        Pickup Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Full name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNo"
            name="phoneNo"
            label="Mobile Number"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={senderPhoneNo}
            onChange={(e) => setSenderPhoneNo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={senderHNo}
            onChange={(e) => setSenderHNo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={senderCity}
            onChange={(e) => setSenderCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State"
            fullWidth
            variant="standard"
            value={senderState}
            onChange={(e) => setSenderState(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pinCode"
            name="pinCode"
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={senderPinCode}
            onChange={(e) => setSenderPinCode(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={senderCountry}
            onChange={(e) => setSenderCountry(e.target.value)}
          />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <Typography variant="h7" gutterBottom>
        Delivery Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Full name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNo"
            name="phoneNo"
            label="Mobile Number"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={receiverPhoneNo}
            onChange={(e) => setReceiverPhoneNo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={receiverHNo}
            onChange={(e) => setReceiverHNo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={receiverCity}
            onChange={(e) => setReceiverCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State"
            fullWidth
            variant="standard"
            value={receiverState}
            onChange={(e) => setReceiverState(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pinCode"
            name="pinCode"
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={receiverPinCode}
            onChange={(e) => setReceiverPinCode(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={receiverCountry}
            onChange={(e) => setReceiverCountry(e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;
