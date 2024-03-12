import { useEffect, useState } from "react"




export default function Poke() {

  const [poke,setPoke]=useState()
  const [loading,setLoading]=useState(true)
  

  console.log(poke?.sprites?.other?.home?.front_default);
  useEffect(()=>{
      const poKeApi=async()=>{
        try {
          setLoading(false)
          setTimeout(async()=>{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
            setLoading(true)
            if(res.ok){
              const data = await res.json()
              setPoke(data)
            }
          },500)

         
           
    

        } catch (error) {
          console.log(error);

        }
      }
      poKeApi()
  },[])
  return (
    <div>
      {loading ?
        <div className="">
          {poke?.name}
          <img src={poke?.sprites?.other?.home?.front_default} alt="" />
        </div>:
        <div className="text-4xl h-svh w-screen flex items-center justify-center">Loading...</div>
    }
    </div>
  )
}
