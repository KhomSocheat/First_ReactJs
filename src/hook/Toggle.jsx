
import { IoCartOutline } from "react-icons/io5";
import Cart from '../components/cart';
import { AiFillBank } from "react-icons/ai";
import useToggle from './custom/useToggle';
const Toggle = () => {
   const [isShow,handleToggle] = useToggle(false);
  return (
    <main className='h-screen w-full bg-gray-300 grid place-items-center' style={isShow ? {backgroundColor: 'red'} : {backgroundColor : 'pink'}}>
        <button onClick={handleToggle}>
          {
              isShow ? <IoCartOutline className='text-6xl' /> : <AiFillBank className='text-6xl' />
          }
             
        </button>
        {
            isShow ? <Cart/> : null
        }
    </main>
  )
}
export default Toggle
