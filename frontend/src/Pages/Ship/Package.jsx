import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Package = () => {
  const dispatch = useDispatch();
  const { shippingItems } = useSelector((state) => state.ship);

  const [length, setLength] = useState(shippingItems.length);
  const [width, setWidth] = useState(shippingItems.width);
  const [height, setHeight] = useState(shippingItems.height);
  const [weight, setWeight] = useState(shippingItems.weight);
  const [quantity, setQuantity] = useState(shippingItems.quantity);

  useEffect(() => {
    dispatch({
      type: "addPackageInfo",
      payload: { length, width, height, weight, quantity },
    });
  }, [dispatch, length, width, height, weight, quantity]);
  return (
    <>
      <Typography variant="h7" gutterBottom>
        Package Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Weight"
            label="Weight"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="quantity"
            label="Quantity"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="length"
            label="Length"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="width"
            label="Width"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="height"
            label="Height"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Package;
