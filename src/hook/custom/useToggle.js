// this is a custom hook that will toggle the state of a boolean value
import React, { useState } from 'react'
const useToggle = (param) => { // this is the initial value of the boolean state, it will be passed as an argument when the hook is called
    const [isShow,setisShow] = useState(param); // this is the state that will be toggled, it will be initialized with the value of the param argument
    const handleToggle = () =>{ // this function will toggle the state of the boolean value, it will be called when the button is clicked
        setisShow(!isShow);
    }
    return [isShow,handleToggle];
}

export default useToggle
