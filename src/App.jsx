import React, { useState,useEffect } from 'react'

function App() {
  const [data,setData]=useState([])
  async function getdata(){
    const response=await fetch("https:course-api.com/react-store-products")
    const resdata = await response.json();
    console.log(data)
  setData(resdata)
  }
 useEffect(()=>{
  getdata()

},[])
  return (
    <>
   
<div className='grid grid-cols-3'>
{data.map((item, index) => (
  <div key={index} className= 'w-full h-1/2 p-3 '>
     <div className='  w-full h-48 '>
      <img className='object-cover rounded-md '  src={item.image} alt="" />
      </div>
      <div className='flex justify-around '>
        <h1 className="text-md text-start font-bold " >
          {item.name}
        </h1> 
        <h1 className="text-md text-start font-bold " >
          {item.price}
        </h1> 
        </div>
    
  </div>
     )
     )}

</div>
    </>
  )
}

export default App
