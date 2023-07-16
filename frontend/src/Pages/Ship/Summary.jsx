import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const Summary = () => {
  const products = [
    {
      name: "Weight",
      price: "4 Kg",
    },
    {
      name: "Quantity",
      price: "4",
    },
    {
      name: "Length",
      price: "4",
    },
    {
      name: "width",
      price: "4",
    },
    {
      name: "Height",
      price: "5",
    },
  ];

  const addresses = ["215 ", "Dehradun", "Uttarakhand", "248002", "India"];
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 0, px: 0 }}>
            <ListItemText primary={product.name} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Vishal Kumar</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <ListItem sx={{ py: 4, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </Grid>
    </>
  );
};

export default Summary;
