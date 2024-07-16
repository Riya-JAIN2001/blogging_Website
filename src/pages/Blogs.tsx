import BlogCard from '../component/BlogCard';
import { useBlog } from '../hooks/index';
import Appbar from './../component/Appbar';

const Blogs = () => {
  const {loading, blogs}= useBlog();
  
  if(loading){
    return <div className=' bg-[url("bg.jpg")]  border-none  h-screen bg-contain bg-center bg-fixed' >
      <div><Appbar pr={true}/></div>
      <div className=' mt-20 bg-[url("bg.jpg")]  border-none  h-screen bg-contain bg-center bg-fixed'>
        <div className='' >
<div role="status" className="animate-pulse mt-5">
    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
    <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
    <div className="flex items-center justify-center mt-4">
        <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
        <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>
<div role="status" className="animate-pulse mt-5">
    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
    <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
    <div className="flex items-center justify-center mt-4">
        <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
        <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>
 
</div>
</div>
    </div>
  }    
   return (
    <>
    <div><Appbar pr={true} /></div>
    <div className='bg-[url("bg.jpg")]  border-none  bg-contain bg-center bg-fixed flex justify-center'>
       
    <div className='  max-w-xl'>
      {blogs?.map((b)=>(
        
        <div key={b.id}>
          
        
                <BlogCard id={b.id} authorname={b.author.name||"Anonymous"} title={b.title} publishedAt={b.published} content={b.content} Image={b.Image}/>

        </div>

      ))}
      </div>
    
    </div></>
  )
} 

export default Blogs