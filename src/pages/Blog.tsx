 
import Appbar from "../component/Appbar";
import FullBlog from "../component/FullBlog";
import { useBlogid } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = ( ) => {
 const {id}= useParams();
 
  const {loading, blog}=useBlogid({id:id||""});
  
  if(loading){
    return (
      <div className=' bg-[url("yellowbg.webp")] border-none  h-screen bg-contain bg-center bg-fixed '>
      <div className="bg-white"><Appbar/></div>
      <div className='flex justify-center bg-[url("yellowbg.webp")] border-none  h-screen bg-contain bg-center bg-fixed'>
        <div className="mt-20" >

        <div role="status" className="w-screen p-4 space-y-4  divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
    <div  className="flex items-center justify-between">
        <div>
            <div  className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div  className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div  className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div  className="flex items-center justify-between pt-4">
        <div>
            <div  className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div  className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div  className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div  className="flex items-center justify-between pt-4">
        <div>
            <div  className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div  className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div  className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div  className="flex items-center justify-between pt-4">
        <div>
            <div  className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div  className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div  className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div  className="flex items-center justify-between pt-4">
        <div>
            <div  className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div  className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div  className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <span  className="sr-only">Loading...</span>
</div>



</div>
</div>
    </div>
    )
  }
  return (
    <>
    {/* <Appbar/> */}
      
    <div  className="bg-white">
      {blog&&(<FullBlog blog={blog} user={false}/>)}
      
      </div>
    </> 
  )
}

export default Blog