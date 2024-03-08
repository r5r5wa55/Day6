import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export default function Card() {
    const {movies} = useSelector((state)=>state.movie)
  return (
    <div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        
            {movies && 
                movies.map((mv)=>(
                    <div className="" key={mv.imdbID} > 

                        <div className="  p-5 flex flex-col bg-zinc-100 drop-shadow-xl cursor-pointer hover:drop-shadow-2xl  h-full relative">
                                <img src={mv.Poster} alt="" className=" "/>
                                <div className="my-3 text-lg">Year : {mv.Year}</div>
                                <h2>Movie</h2>
                                <div className="mb-3 text-sm"> {mv.Title}</div>
                                <Link to={`/movie/${mv.imdbID}`}>
                                    Read More...
                                </Link>
                        </div>
                    
                    </div>
                ))
            }

        </div>
    </div>
  )
}
