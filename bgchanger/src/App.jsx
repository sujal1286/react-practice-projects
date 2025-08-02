import React, { useState } from 'react'

function App() {
const [color, setColor] = useState("orange");
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <h1 className='text-2xl font-bold text-center text-black w-full mb-4'>
          Background Color Changer
        </h1>
        <div className='flex flex-wrap justify-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-lg font-bold'> 
          <button onClick={() => setColor("orange")} className='w-20 h-8 rounded-full bg-orange-500'>Orange</button>
          <button onClick={() => setColor("blue")} className='w-20 h-8 rounded-full bg-blue-500'>Blue</button>
          <button onClick={() => setColor("green")} className='w-20 h-8 rounded-full bg-green-500'>Green</button>
          <button onClick={() => setColor("red")} className='w-20 h-8 rounded-full bg-red-500'>Red</button>
          <button onClick={() => setColor("purple")} className='w-20 h-8 rounded-full bg-purple-500'>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
