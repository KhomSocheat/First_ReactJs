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
            },2000) // this will update the state of the number variable after 2 seconds, it will use the previous state to calculate the new state, this is important because if we use the number variable directly, it will always be 0 when the setTimeout function is called, and it will always update the state to 1, but if we use the state variable that is passed as an argument to the setNumber function, it will have the correct value of the number variable at the time when the setTimeout function is called
        }
        className='bg-blue-500 py-2 px-5 rounded-lg text-white'>Click</button>
    </div>
  )
}

export default Updater
