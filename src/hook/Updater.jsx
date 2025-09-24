import React, { useState } from 'react'

const Updater = () => {
    const [number,setNumber] = useState(0);
  return (
    <div className='w-full h-screen grid place-items-center'>
        <h1  className='text-9xl'>{number}</h1>
        <button 
        onClick={() => 
            setTimeout(() => {
                setNumber(state => {
                    return state + 1;
                })
            },2000)
        }
        className='bg-blue-500 py-2 px-5 rounded-lg text-white'>Click</button>
    </div>
  )
}

export default Updater
