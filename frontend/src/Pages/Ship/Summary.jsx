import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'
import { calculateRate } from '../../Redux/Actions/shipAction'
import { toast } from 'react-hot-toast'

const Summary = () => {
  const dispatch = useDispatch()

  const { senderDetails, receiverDetails, shippingItems, totalAmount } =
    useSelector(state => state.ship)

  const addresses = [
    receiverDetails.hNo,
    receiverDetails.city,
    receiverDetails.state,
    receiverDetails.country,
    receiverDetails.pinCode
  ]

  useEffect(() => {
    dispatch(
      calculateRate(
        shippingItems.length,
        shippingItems.width,
        shippingItems.height,
        shippingItems.quantity,
        shippingItems.weight,
        senderDetails.city,
        receiverDetails.city
      )
    )
  }, [
    dispatch,
    receiverDetails.city,
    senderDetails.city,
    shippingItems.height,
    shippingItems.length,
    shippingItems.quantity,
    shippingItems.weight,
    shippingItems.width
  ])

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary='weight' />
          <Typography variant='body2'>{shippingItems.weight}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary='quantity' />
          <Typography variant='body2'>{shippingItems.quantity}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary='length' />
          <Typography variant='body2'>{shippingItems.length}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary='width' />
          <Typography variant='body2'>{shippingItems.width}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText primary='height' />
          <Typography variant='body2'>{shippingItems.height}</Typography>
        </ListItem>
      </List>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Vishal Kumar</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <ListItem sx={{ py: 4, px: 0 }}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
            {totalAmount}
          </Typography>
        </ListItem>
      </Grid>
    </>
  )
}

export default Summary
