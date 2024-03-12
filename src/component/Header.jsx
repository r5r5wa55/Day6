import { useState } from "react";

import { Link } from "react-router-dom";
export default function Header() {


    const [modle,setmodle]=useState(false)
    const [header,setHeader]=useState('')

    console.log(modle);
  return (
    <div className=" bg-violet-900 text-white">
       <div className="flex justify-between w-screen max-w-7xl mx-auto p-3">
            <div className="text-2xl font-bold  mx-2">VvE werapol</div>
            
            <div className="  ">
                <div className="hidden sm:inline">

                    <div className="gap-5  items-center justify-center h-full flex">
                        <Link to='/'>
                            <h2 className={`cursor-pointer hover:border-b-2 hover:font-bold ${header =='home' ? 'border-b-2':null}`} onClick={(()=>setHeader('home'))}>Home</h2>
                        </Link>
                        <Link to='/m1'>
                            <h2 className={`cursor-pointer hover:border-b-2 hover:font-bold ${header =='m1' ? 'border-b-2':null}`} onClick={(()=>setHeader('m1'))}>Moive</h2>
                        </Link>
                        <Link to='/poke'>
                            <h2 className={`cursor-pointer hover:border-b-2 hover:font-bold ${header =='poke' ? 'border-b-2':null}`} onClick={(()=>setHeader('poke'))}>Poke</h2>
                        </Link>
                        <Link to='/crud'>
                            <h2 className={`cursor-pointer hover:border-b-2 hover:font-bold ${header =='crud' ? 'border-b-2':null}`}  onClick={(()=>setHeader('crud'))}>Crud</h2>
                        </Link>
                
                    </div>


                    
                </div>


          
             
            </div>
           
            <div className=" flex items-start justify-start text-start">
                <button className="order-2 sm:hidden   items-start  mt-2 mx-2 cursor-pointer " onClick={()=>setmodle(()=>!modle)}>
                        <div className={`text-3xl`}><ion-icon  name={modle ? 'close':'menu' } ></ion-icon></div>                 
                </button>
                <button className="px-5 py-2 border-2 rounded-lg hover:bg-violet-500 mx-2 ">
                    <div className="">Sigin</div>
                    
                </button>
             
            </div>
        

       </div>
       {
             modle &&
                <ul className={`sm:hidden right-0  bg-violet-900  pt-2 flex-col  text-center`}>
                <Link to='/' className="" >
                    <h2 className={`cursor-pointer hover:border-b-2 hover:font-bold m-4 ${header =='home' ? 'border-b-2':null}`}  onClick={(()=>setHeader('home'))}>Home</h2>
                </Link>
                <Link to='/m1'>
                    <h2 className={`cursor-pointer hover:border-b-2 hover:font-bold m-4 ${header =='m1' ? ' border-b-2':null}`}  onClick={(()=>setHeader('m1'))}>Moive</h2>
                </Link>
                <Link to='/poke'>
                    <h2 className={`cursor-pointer hover:border-b-2 hover:font-bold m-4 ${header =='poke' ? 'border-b-2':null}`}  onClick={(()=>setHeader('poke'))}>Poke</h2>
                </Link>
                <Link to='/crud'>
                    <h2 className={`cursor-pointer hover:border-b-2 hover:font-bold m-4 ${header =='crud' ? 'border-b-2':null}`}  onClick={(()=>setHeader('crud'))}>Crud</h2>
                </Link>
      
                    <h2 className='h-2'></h2>
         
            </ul>
            }
    </div>
  )
}
