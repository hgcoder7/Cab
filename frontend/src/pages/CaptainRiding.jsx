import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../Components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef=useRef(null)

    useGSAP(function(){
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(0)'
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[finishRidePanel])
  return (
    <div className="h-screen">
      <div className="fixed p-4 top-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/home"
          className="  h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div onClick={()=>{setFinishRidePanel(true)}} className="h-1/5 p-6 flex items-center justify-between bg-yellow-300 relative pt-10">
            <h5 className='p-1 text-center w-[90%] absolute top-0'
            onClick={()=>{}}>
            <i className=" text-3xl text-gray-800 ri-arrow-up-wide-fill"></i></h5>
            <h4 className="text-xl font-semibold">4 KM away</h4>
            <button className=' p-3 px-10  bg-green-600 text-white font-semibold rounded-lg'>Complete Ride</button>
      </div>
      <div ref={finishRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
          </div>
      
    </div>
  )
}

export default CaptainRiding
