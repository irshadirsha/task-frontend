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
   
<div className=' w-full h-full  lg:grid-cols-3 sm:grid  grid-cols-3  gap-3 p-3'>
{data.map((item, index) => (
  <div className= ' p-3  w-full  '>
     <div className='  w-full h-48 '>
      <img className='object-cover w-full h-full rounded-lg'  
       src={item.image}
       alt="" />
      </div>
      <div className='flex justify-around '>
        <h1 className="text-md font-mono text-start font-bold " >
          {item.name}
        </h1> 
        <h1 className="text-md font-mono text-start font-bold " >
     Rs:{item.price}.00
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
