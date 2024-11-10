import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className='w-full h-screen flex justify-center items-end p-10' style={{ backgroundColor: color }}>
        <div className='flex justify-center items-center w-5/6 bg-zinc-800 text-white rounded-lg p-3 gap-10'>
          <button className='bg-red-500 p-2 rounded-lg' onClick={()=>setColor("red")}>Red</button>
          <button className='bg-blue-500 p-2 rounded-lg' onClick={() => setColor("blue")}>Blue</button>
          <button className='bg-green-500 p-2 rounded-lg' onClick={() => setColor("green")}>Green</button>
          <button className='bg-black p-2 rounded-lg' onClick={() => setColor("black")}>Black</button>
          <button className='bg-purple-500 p-2 rounded-lg' onClick={() => setColor("purple")}>purple</button>
        </div>
      </div>
    </>
  )
}

export default App
