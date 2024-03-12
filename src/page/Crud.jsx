import { useEffect, useState } from "react"
import axios from 'axios'
import { MdCreditScore ,MdDeleteForever} from "react-icons/md";

export default function Crud() {

    const [datafech,setDataFech]=useState([])
    const [model,setmodel]=useState(false)

    const [fname,setFname]=useState()
    const [lname,setLname]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()


    useEffect(()=>{
    const fetchDb=async()=>{

        try {
            const res = await axios.get(`http://localhost:8000/api/getall`)
            const data  = await res.data
            setDataFech(data)
        } catch (error) {
            console.log(error);
        }   
    }
    fetchDb()
    },[datafech])

    const hadleSubmit=async(e)=>{
        e.preventDefault()
         await axios.post(`http://localhost:8000/api/create`,{fname,lname,email,password})
        .then(res=>{console.log(res)})
        .catch(err=>console.log(err))
        setmodel(false)
    }
   
    
  return (
   <div >
        <div className="sm:max-w-4xl mx-auto mt-20" >
            <button className="p-2 bg-fuchsia-600 rounded-lg text-white font-bold" onClick={()=>setmodel(!model)} >Add User</button>
        </div>
    
        <div className="max-w-5xl mx-auto mb-20 bg-neutral-50 shadow-xl " >
        
        <div className="w-full">
            <button></button>
            <div className="flex flex-col  ">
                <ul className="w-full grid  grid-cols-4 p-5 text-center bg-blue-800 text-white justify-center rounded-tl-3xl rounded-tr-3xl">
                    <li>S.No</li>
                    <li>User name</li>
                    <li>User Email</li>
                    <li>Action</li>
                </ul>
                {datafech &&
                    datafech?.map((data)=>(

               
                        <ul className="w-full grid  grid-cols-4 p-5 text-center hover:bg-slate-200 h-full  items-center" key={data?._id}>
                            <li>{data?.lname}</li>
                            <li>{data?.lname} {data?.fname}</li>
                            <li>{data?.email}</li>
                            <li>
                                <button className="p-2 bg-red-700 rounded-lg  text-white mx-2">
                                    <MdDeleteForever className="sm:text-2xl"/>
                                </button>
                                <button className="p-2 bg-green-500 rounded-lg  text-white">
                                    <MdCreditScore className="sm:text-2xl" />
                                </button>
                            </li>
                        </ul>
           

                    ))
                    
                }
            </div>
        </div>
        </div>
        
        
        {
            model &&
            
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col md:w-[700px] bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Add User
                        </h3>
                
                        </div>
                        {/*body*/}
                        <form onSubmit={hadleSubmit}>
                            <div className=" p-6 flex-auto w-2xl">
                                <div className="flex flex-col gap-5 p-5">
                                    <input 
                                        required
                                        type="input" 
                                        placeholder="Name" 
                                        className="p-2 border-b-2 w-full border-violet-950 outline-none text-xl mb-2"  
                                        id="fname"
                                        name="fname"
                                        onChange={(e)=>setFname(e.target.value)}
                                    />
                                    <input 
                                        required
                                        type="text" 
                                        placeholder="Lastname"
                                        className="p-2 border-b-2 w-full border-violet-950 outline-none text-xl mb-2"  
                                        id="lname"
                                        name="lname"
                                         onChange={(e)=>setLname(e.target.value)}
                                    />
                                    <input 
                                        required
                                        type="text" 
                                        placeholder="Email"
                                        className="p-2 border-b-2 w-full border-violet-950 outline-none text-xl mb-2"  
                                        id="email"
                                        name="email"
                                         onChange={(e)=>setEmail(e.target.value)}
                                    />
                                    <input 
                                        required
                                        type="text" 
                                        placeholder="Password" 
                                        className="p-2 border-b-2 w-full border-violet-950 outline-none text-xl mb-2" 
                                        id="password"
                                        name="password"
                                         onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </div>
                        
                            </div>                     
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setmodel(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
            
                    </div>
                    </div>
                </div>
              
            </>

        }
   </div>
   
  )
}
