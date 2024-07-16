import { useState,useEffect } from "react";
import { Avtar } from "./Avtar"
import { Link } from 'react-router-dom';
import { BackendUrl } from "../config";
import axios from "axios"
import { ImWink } from "react-icons/im";

const Appbar = ({pr}:{pr?:boolean}) => {
  const [name, setName]= useState("");
  const[id, setId]=useState("");
  useEffect(()=>{
   axios.get(`${BackendUrl}/api/v1/user/profile`,{
    headers:{
      Authorization:"Bearer "+localStorage.getItem("token")
    }
   }).then(res=>{
    setId(res.data.res.id)
    setName(res.data.res.name)})
  },[name])
  return (
    <div className="shadow-md  bg-white p-4 ">
      <div className="flex bg-white justify-between">
        <Link to={"/blogs"}>
        
        <div className="font-semibold flex text-xl bg-white "><div className="text-3xl font-bold"><ImWink /></div> <div className="mx-2 font-serif ">BloggyBlogs</div></div>
        </Link>
        <div className=" flex bg-white">
          <Link to={'/publish'}>
        <button type="button" className="text-white  mr-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-2 py-1 mt-1 text-center me-2 mb-2  ">Create New</button>
        </Link>
        {pr===true ? <Link to={`/userblogs`}>
          <div className="mt-1 bg-white"><Avtar size="small" name={name}/>
          <Link to={"/signin"} className="underline text-xs  text-gray-500 font-thin">Logout</Link>
          </div></Link>:<div className="mt-1"><Avtar size="small" name={name}/>

          </div>}
        </div> 
        </div>
    </div>
  )
}

export default Appbar