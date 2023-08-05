import React, { useState, useEffect } from 'react'
import MetaData from '../../Components/MetaData'
import TrackDetails from './TrackDetails'
import { useDispatch, useSelector } from 'react-redux'
import { trackOrderDetails } from '../../Redux/Actions/orderAction'
import toast from 'react-hot-toast'

const Track = () => {
  const [id, setId] = useState('')
  const { loading, track, error, message, fetched } = useSelector(
    state => state.orders
  )

  const dispatch = useDispatch()

  const trackHandler = e => {
    e.preventDefault()
    console.log(id)
    dispatch(trackOrderDetails(id))
    console.log('clicked')
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
    if (message) {
      toast.success(message)
    }
  }, [error, message])
  return (
    <>
      <MetaData title='Track' />;
      <section id='Track' className='h-full w-full'>
        <div className='w-[100%]  mx-auto'>
          <h2
            className='text-[#000] text-[2.5rem] font-bold
          text-center uppercase p-2'
          >
            Track package
          </h2>
          <div className=''>
            <div className='w-[80%] md:w-[50%] mx-auto my-20 border-solid border-2 border-black rounded-[8px]'>
              <ul className='flex justify-center   items-center my-4'>
                {/* <li className='text-[0.8rem] font-medium flex justify-center items-center mr-3'>
                  <input type='radio' name='track' className='m-2' /> Order Id
                </li> */}
                <li className='text-[0.8rem] font-medium flex justify-center items-center '>
                  <input type='radio' name='track' className='m-2' checked />{' '}
                  Tracking ID
                </li>
              </ul>
              <div className='flex justify-center items-center'>
                <input
                  type='number'
                  placeholder='Tracking ID'
                  className='h-[50px] w-[90%] text-[1rem] font-medium border-solid border-2 border-black outline-none p-4'
                  value={id}
                  onChange={e => setId(e.target.value)}
                />
              </div>
              <div className='flex justify-center items-center mt-3'>
                <button
                  className='h-[40px] w-[150px] md:h-[40px] md:w-[200px] text-[0.8rem] md:text-[1rem] text-[#000] font-medium capitalize rounded-md   mx-auto hover:cursor-pointer my-3 bg-gradient-to-r from-[#feb21a] from-[0%] via-[#fedb28] via-[50%] to-[#feb21a] to-[100%]'
                  onClick={trackHandler}
                >
                  Track
                </button>
              </div>
            </div>
          </div>

          <div className='h-[100%] w-[100%]  flex justify-center items-center mb-10'>
            {loading === false && fetched === true ? <TrackDetails /> : ''}
          </div>
        </div>
      </section>
    </>
  )
}

export default Track
