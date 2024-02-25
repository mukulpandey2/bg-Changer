import React, { useState } from 'react'

const BgChanger = () => {
    const [color , setColor] =useState("red");

    
  return (

    <div>
      <div className='body flex items-center justify-center h-[100vh]' style={{backgroundColor:color}} >
          <div className="buttons flex gap-3 bg-white text-white py-4 px-6 rounded-lg">
            <button className='bg-red-500 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("red")}>Red</button>
            <button className='bg-green-900 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("Green")}>Green</button>
            <button className='bg-blue-900 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("Blue")}>Blue</button>
            <button className='bg-yellow-400 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("Yellow")}>Yellow</button>
            <button className='bg-violet-500 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("Violet")}>Violet</button>
            <button className='bg-red-900 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("Brown")}>Brown</button>
            <button className='bg-pink-300 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("Pink")}>Pink</button>
            <button className='bg-blue-300 px-4 py-2 rounded-full cursor-pointer' onClick={() => setColor("Skyblue")}>Skyblue</button>
          </div>
      </div>
        
    </div>
  )
}

export default BgChanger