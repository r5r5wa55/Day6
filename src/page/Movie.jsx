import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import {addMovie} from '../store/reducer'
import Card from "../component/Card"
export default function Movie() {
    const dispatch = useDispatch()
    const [searchMovie, setSearchMovie]=useState('')
    const [error ,setError] = useState(null)
    const [we,setWe] = useState()
 
    console.log(we);
    console.log(error);


    useEffect(()=>{
        const fetchMovie=async()=>{
            try {
                const searchKey = searchMovie ? searchMovie :'2023';
                const res = await fetch(`https://www.omdbapi.com/?apikey=202a113f&s=${searchKey}&type=movie`)
                const data = await res.json()
                if(res.ok){
               
                    setError(data.Response)
                    setTimeout(()=>{
                        dispatch(addMovie(data.Search))
                    },500)
                }
                if(!res){
                    setError(res.Response)
                    setWe(res.Response)
                    console.log(res.Error);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchMovie()
    },[dispatch, searchMovie])
  

  return (

    <div className="max-w-7xl mx-auto">
    
           
            <div className="w-5/6 mx-auto mt-10 flex justify-center items-center ">
                <input type="text" name="" id=""  className="border-b-2 border-black p-2 w-96 outline-none" placeholder="Search..." value={searchMovie} onChange={((e)=>setSearchMovie(e.target.value))}/>
            </div>
          
     
           <Card />

    </div>
  )
}
