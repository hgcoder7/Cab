import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainsDetails from "../Components/CaptainsDetails";
import RidePopUp from "../Components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../Components/ConfirmRidePopUp";

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [ConfirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)



  const ridePopupPanelRef=useRef(null);
  const ConfirmRidePopupPanelRef=useRef(null);

  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopupPanel])

  useGSAP(function(){
    if(ConfirmRidePopupPanel){
      gsap.to(ConfirmRidePopupPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ConfirmRidePopupPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ConfirmRidePopupPanel])

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
      <div className="h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainsDetails/>
      </div>
      <div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>
      <div ref={ConfirmRidePopupPanelRef} className="fixed w-full z-10 bottom-0 h-screen translate-y-full bg-white px-3 py-10 pt-12">
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
