import React, { useState } from 'react'
const UseState = () => {
    const [count,setCount] = useState(0);
  return (
    <main className='h-screen w-full flex justify-center items-center '>
        <button className='bg-blue-600 py-3 px-5 rounded-lg text-white' onClick={() => setCount(count+1)}>+</button>
        <h1 className='mx-3 bg-red-700 text-white py-3 px-4 rounded-lg'>{count}</h1>
        <button className='bg-red-700 py-3 px-5 rounded-lg text-white' onClick={() => setCount(count-1) }>-</button>
    </main>
  )
}
export default UseState