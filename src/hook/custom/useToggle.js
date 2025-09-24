
import React, { useState } from 'react'
const useToggle = (param) => {
    const [isShow,setisShow] = useState(param);
    const handleToggle = () =>{
        setisShow(!isShow);
    }
    return [isShow,handleToggle];
}

export default useToggle
