import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0'
      onClick={()=>{props.setVehicleFound(false)}}>
        <i className=" text-3xl text-gray-300 ri-arrow-down-wide-fill"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>
        <div className="flex gap-2 items-center justify-between flex-col">
           <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className="w-full mt-5">
                <div className="flex items-center gap-5 p-3 border-b-2">
                <i className="ri-map-pin-user-fill"></i>
                    <div className="">
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Bhopal</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 p-3 border-b-2">
                    <i className="ri-map-pin-2-fill"></i>
                    <div className="">
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Bhopal</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 p-3">
                <i className="ri-currency-line"></i>
                    <div className="">
                        <h3 className="text-lg font-medium">$182.33</h3>
                        <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
                    </div>
                </div>
        </div>

        </div>
    </div>
  )
}

export default LookingForDriver