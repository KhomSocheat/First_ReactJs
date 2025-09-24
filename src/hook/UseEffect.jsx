import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Card from '../Card_Api/Card';
const UseEffect = () => {
    const [api,setApi] = useState([]);
    const ShowID = (id) =>{
        const obj = api.find(api => api.id === id);
        if(obj){
             alert(JSON.stringify(obj));
        }
    }
    const url = "https://fakestoreapi.com/products";
    useEffect(() =>{
        async function getList(){
            try{
                const res = await axios.get(url);
                setApi(res.data);
                console.log(res)
            }catch(error){
                console.log("error fetching" , error);
            }
        }
        getList();
    },[]);
  return (
    <main className=''>
        <Card product={api} getID={ShowID}/>
    </main>
  )
}
export default UseEffect
