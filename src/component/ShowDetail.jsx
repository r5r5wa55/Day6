import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



export default function ShowDetail() {
    const {id} = useParams()
    const [movieShow,setMovieShow]=useState()

    useEffect(()=>{
        const fetchMovie=async()=>{
            try {
               const res = await fetch(`https://www.omdbapi.com/?apikey=202a113f&i=${id}&plot=full`) 
               const data = await res.json()
               setMovieShow(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchMovie()
    },[id])

  return (
    <div>
      {
        movieShow &&
        <div className="">
            {movieShow.Actors}
            <img src={movieShow.Poster} alt="" />
        </div>
        
      }
    </div>
  )
}
