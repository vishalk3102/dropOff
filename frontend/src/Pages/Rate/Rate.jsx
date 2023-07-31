import React, { useState } from 'react'
import MetaData from '../../Components/MetaData'
import ShippingRates from '../../Data/ShippingRate'
import { toast } from 'react-hot-toast'

const Rate = () => {
  const [fromAddress, setFromAddress] = useState('')
  const [toAddress, setToAddress] = useState('')
  const [length, setLength] = useState()
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  const [quantity, setQuantity] = useState()
  const [weight, setWeight] = useState()
  const [totalRate, setTotalRate] = useState(null)
  const [show, setShow] = useState(false)

  const calculateRate = () => {
    if (fromAddress === toAddress) {
      toast.error("From and To adddress can't be same")
    }

    let size = length * width * height
    let rate = 0

    if (size <= 1) {
      rate = 20
    } else if (size > 1 && size <= 10) {
      rate = 30
    } else if (size > 10 && size <= 20) {
      rate = 40
    } else {
      rate = 50
    }

    if (ShippingRates[fromAddress] && ShippingRates[fromAddress][toAddress]) {
      rate += ShippingRates[fromAddress][toAddress]
      rate *= quantity
      setTotalRate(rate)
      setShow(true)
    } else {
      if (
        !ShippingRates[fromAddress] &&
        !ShippingRates[fromAddress][toAddress]
      ) {
        toast.error('Invalid From Address')
      } else if (!ShippingRates[fromAddress]) {
        toast.error('Invalid  Address')
      } else if (!ShippingRates[fromAddress][toAddress]) {
        toast.error('Invalid To Address')
      } else {
        toast.error('Error Occured')
      }
      setTotalRate(null)
    }
  }

  return (
    <>
      {' '}
      <MetaData title='Rate' />
      <section id='Rate' className='h-full w-full'>
        <div className='max-w-[1200px] mx-auto mb-20'>
          <h2
            className='text-[#000] text-[2.5rem] font-bold
          text-center uppercase p-2 mt-5'
          >
            Calculate Shipping Charges
          </h2>
          <div className=' w-[60%] my-10 mx-auto'>
            <div className='flex flex-col bg-gray-200  border-solid border-2 m-[3px]'>
              <label className='uppercase text-[0.8rem] font-medium p-1'>
                From :
                <select
                  id='options'
                  value={fromAddress}
                  onChange={e => setFromAddress(e.target.value)}
                  className='w-full text-[1.4rem]  p-2 bg-gray-200 capitalize outline-none'
                  required
                >
                  <option value=''>Select an City</option>
                  <option value='pune'>pune</option>
                  <option value='mumbai'>mumbai</option>
                  <option value='bangalore'>bangalore</option>
                  <option value='chennai'>chennai</option>
                  <option value='delhi'>delhi</option>
                </select>
              </label>
            </div>
            <div className='flex flex-col bg-gray-200  border-solid border-2 m-[3px]'>
              <label className='uppercase text-[0.8rem] font-medium p-1'>
                To :
                <select
                  id='options'
                  value={toAddress}
                  onChange={e => setToAddress(e.target.value)}
                  className='w-full text-[1.4rem]  p-2 bg-gray-200 capitalize outline-none'
                  required
                >
                  <option value=''>Select an City</option>
                  <option value='pune'>pune</option>
                  <option value='mumbai'>mumbai</option>
                  <option value='bangalore'>bangalore</option>
                  <option value='chennai'>chennai</option>
                  <option value='delhi'>delhi</option>
                </select>
              </label>
            </div>
          </div>
          <div className=' w-[60%] my-10 mx-auto'>
            <div className='grid grid-cols-4   '>
              <div className='col-span-4 sm:col-span-2 md:col-span-2 flex flex-col  m-[3px]'>
                <label className='bg-gray-200 uppercase text-[0.8rem] font-medium p-1  border-solid border-b-2 border-black'>
                  No of packages <br /> Max 40
                </label>
                <input
                  className='w-full text-[1.4rem] capitalize py-2 px-2 bg-gray-200 outline-none'
                  type='text'
                  placeholder='0'
                  name='name'
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div className='col-span-4 sm:col-span-2 md:col-span-2 flex flex-col bg-gray-200 m-[3px]'>
                <label className='bg-gray-200 uppercase text-[0.8rem] font-medium p-1  border-solid border-b-2 border-black'>
                  weights per package <br /> Max weight 68kg
                </label>
                <input
                  className='w-full text-[1.4rem] capitalize py-2 px-2 bg-gray-200 outline-none'
                  type='text'
                  name='name'
                  placeholder='0 Kg'
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='grid grid-cols-3   '>
              <div className='col-span-3 sm:col-span-3 md:col-span-1 flex flex-col bg-gray-200 m-[3px]'>
                <label className='bg-gray-200 uppercase text-[0.8rem] font-medium p-1  border-solid border-b-2 border-black'>
                  Length (in cm) <br />
                </label>
                <input
                  className='w-full text-[1.4rem]  py-2 px-2 bg-gray-200 outline-none'
                  type='text'
                  name='name'
                  placeholder='1'
                  value={length}
                  onChange={e => setLength(e.target.value)}
                  required
                />
              </div>
              <div className='col-span-3 sm:col-span-3 md:col-span-1 flex flex-col bg-gray-200 m-[3px]'>
                <label className='bg-gray-200 uppercase text-[0.8rem] font-medium p-1  border-solid border-b-2 border-black'>
                  width (in cm) <br />
                </label>
                <input
                  className='w-full text-[1.4rem]  py-2 px-2 bg-gray-200 outline-none'
                  type='text'
                  name='name'
                  placeholder='1'
                  value={width}
                  onChange={e => setWidth(e.target.value)}
                  required
                />
              </div>
              <div className='col-span-3 sm:col-span-3 md:col-span-1 flex flex-col bg-gray-200 m-[3px]'>
                <label className='bg-gray-200 uppercase text-[0.8rem] font-medium p-1  border-solid border-b-2 border-black'>
                  height (in cm) <br />
                </label>
                <input
                  className='w-full text-[1.4rem]  py-2 px-2 bg-gray-200 outline-none'
                  type='text'
                  name='name'
                  placeholder='1'
                  value={height}
                  onChange={e => setHeight(e.target.value)}
                  required
                />
              </div>
            </div>
            <div
              className='h-[40px] w-[150px]  flex justify-center items-center text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer mt-10 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]'
              onClick={calculateRate}
            >
              Show Rates
            </div>
          </div>
          {show === true ? (
            <div className='w-[90%] p-4 my-10 mx-auto'>
              <div className='h-[70px] w-[100%] text-[1.2rem] md:text-[1.6rem]  flex justify-center items-center text-[#000] font-semimedium capitalize rounded-md   mx-auto hover:cursor-pointer bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]'>
                Total Rate For Delivery : Rs.
                <span className='px-1'>{totalRate} </span>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </section>
    </>
  )
}

export default Rate
