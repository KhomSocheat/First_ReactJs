import Card from './Card'
import pro from '../../assets/man.png'
import watch from '../../assets/1_After_4-2_400x.webp'
import watch1 from '../../assets/Addingnumbersaroundacircle2_1_400x.webp'
let arr =[ // this is an array of objects that will be passed as props to the Card component
    {
        id: 1,
        img : pro,
        name : "Socheat",
        des : "This is person 1",
    },
    {
        id: 2,
        img : watch,
        name : "Watach",
        des : "this is watch",
    },
]
const Report = (id) =>{ // this function will be called when the button in the Card component is clicked, it will receive the id of the card as an argument
    const obj = arr.find(val => ( // this will find the object in the array that has the same id as the one passed as an argument
      val.id === id  // this will return true if the id of the object is the same as the id passed as an argument, and false otherwise
    ))
    // console.log(obj);
    alert(JSON.stringify(obj));
}
const Cards = () => {
  return (
   <div className='w-full h-screen place-items-center'>
        <div className='grid w-3/4 grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
         {
          arr.map((obj,index) =>(
            <Card {...obj} key={index} getById={Report}/>
          ))
         }
      </div>
   </div>
  )
}
export default Cards
