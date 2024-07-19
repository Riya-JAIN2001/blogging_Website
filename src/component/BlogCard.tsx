import { Avtar } from "./Avtar"
import { Link } from 'react-router-dom';

interface blogCardProps{
    authorname:string,
    title:string,
    content:string,
    publishedAt:string, 
    id:string, 
    Image:string,
}

const BlogCard = ({id,authorname,title,
    content,
    publishedAt, Image}:blogCardProps) => {
  return (
    
   <>
   
    <Link to={"/blog/"+id}>
      
      <div className='border-b p-4  border-slate-400 pb-2 w-screen max-w-screen-md cursor-pointer '>
      <div className="flex">
          <div className="flex justify-center flex-col"><Avtar name={authorname} size="small"/>  </div>
              <div className="font-extralight pl-2 text-md text-slate-400" >{authorname}</div>
              <div className=" mx-1 mt-4"><Circle/></div>
              <div className="pl-2 mt-1 text-gray-400 font-thin text-sm">{publishedAt.slice(0,10)}</div>
              </div>
         
          <div className="text-xl font-semibold text-slate-400">{title}</div>
          
          <div className="font-normal text-md text-slate-400">{content.slice(0,100)+"..."}</div>
  
          <div className="text-slate-400 font-normal text-sm">{Math.ceil((content.length)/100)+"minute(s) read"}</div>
        
          {/* <div className="h-1 w-full bg-slate-200"></div> */}
          {Image!=""? <div className='flex justify-center'><img src={Image} alt="" className="max-h-64" /></div>:""}
      </div>
      
      </Link>
   </>
  )
}
function Circle(){
  return (
    <div className="size-1 bg-black rounded-full">

    </div>
  )
}

export default BlogCard