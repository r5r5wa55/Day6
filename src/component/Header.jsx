import { AiFillAppstore } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" bg-violet-900 text-white h-20 flex items-center justify-center">
       <div className="flex justify-between w-screen max-w-7xl mx-auto ">
            <div className="text-2xl font-bold  mx-2">VvE werapol</div>
            <div className="  hidden md:inline">
                <div className="gap-5  items-center justify-center h-full flex">
                    <Link to='/'>
                        <h2 className="cursor-pointer hover:border-b-2 hover:font-bold">Home</h2>
                    </Link>
                    <Link to='/m1'>
                        <h2 className="cursor-pointer hover:border-b-2 hover:font-bold">Moive</h2>
                    </Link>
                    <Link to='/poke'>
                        <h2 className="cursor-pointer hover:border-b-2 hover:font-bold">Poke</h2>
                    </Link>
               
                </div>
               
            </div>
            <div className="flex items-center justify-center">
                <div className="order-2 sm:hidden  h-full text-center mt-4 mx-5 cursor-pointer">
                    <AiFillAppstore  className="inline md:hidden text-3xl"/>
                </div>
                <button className="px-5 py-2 border-2 rounded-lg hover:bg-violet-500 mx-2">
                    <div className="">Sigin</div>
                    
                </button>
            </div>
         
       </div>
      
    </div>
  )
}
