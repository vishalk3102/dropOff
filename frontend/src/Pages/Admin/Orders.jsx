import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye } from 'react-icons/ai'
import { GiArmoredBoomerang } from 'react-icons/gi'
import MetaData from '../../Components/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { getAdminOrders, processOrder } from '../../Redux/Actions/adminAction'
import Loader from '../../Components/Loader'
import Box from '@mui/material/Box'
import SideNavbar from './SideNavbar'

const Orders = () => {
  const dispatch = useDispatch()

  const { loading, orders, error, message } = useSelector(state => state.admin)

  useEffect(() => {
    if (message) {
      toast.success(message)
      dispatch({ type: 'clearMessage' })
    }
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' })
    }
    dispatch(getAdminOrders())
  }, [dispatch, message, error])

  const processOrderHandler = id => {
    dispatch(processOrder(id))
  }

  return (
    <>
      <MetaData title='Orders' />
      <section id='Orders' className='w-full h-full  mt-20'>
        {loading === false ? (
          <Box sx={{ display: 'flex', marginTop: '5rem' }}>
            <SideNavbar />
            <div className='max-w-[1200px] w-[100%] mx-auto my-10'>
              <h2
                className='text-[#000] text-[2.5rem] font-bold
              text-center uppercase p-2 mt-5'
              >
                Orders Stats
              </h2>
              <div className='overflow-auto'>
                <table className='table-auto border-solid border-2 border-black border-collapse rounded mx-auto my-10'>
                  <thead>
                    <tr className='w-[100%] border-solid border-2 border-black'>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400  border border-slate-900 p-3 uppercase text-center'>
                        Tracking Id
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                        Receiver Name
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                        Receiver Address
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                        Weight
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                        Quantity
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                        Amount
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                        Status
                      </th>
                      <th className='text-[0.8rem] md:text-[1.2rem] font-bold bg-gray-400 border border-slate-900 p-3  uppercase text-center'>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders &&
                      orders.map(i => {
                        return (
                          <>
                            <tr key={i} className='border border-slate-900 '>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {i.trackingID}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {i.receiverDetails.name}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-left'>
                                {`${i.receiverDetails.hNo}, ${i.receiverDetails.city}, ${i.receiverDetails.state},${i.receiverDetails.country},${i.receiverDetails.pinCode}`}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {i.shippingItems.quantity}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {i.shippingItems.weight}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {i.totalAmount}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal border border-slate-900 p-1 capitalize text-center'>
                                {i.orderStatus}
                              </td>
                              <td className='text-[0.7rem] md:text-[1rem] font-normal text-center  p-1 capitalize flex justify-evenly items-center '>
                                <Link to={`/order/${i._id}`} className='p-1'>
                                  <AiOutlineEye size={24} />
                                </Link>
                                <button
                                  className='p-1'
                                  onClick={() => processOrderHandler(i._id)}
                                >
                                  <GiArmoredBoomerang size={24} />
                                </button>
                              </td>
                            </tr>
                          </>
                        )
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </Box>
        ) : (
          <Loader />
        )}
      </section>
    </>
  )
}

export default Orders
