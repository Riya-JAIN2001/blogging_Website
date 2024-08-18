// import { Avtar } from "./Avtar"
// import { Link } from 'react-router-dom';

// interface blogCardProps{
//     authorname:string,
//     title:string,
//     content:string,
//     publishedAt:string, 
//     id:string, 
//     Image:string,
// }

// const UserblogCard = ({id,authorname,title,
//     content,
//     publishedAt, Image}:blogCardProps) => {
//   return (
    
//     <Link to={"/usersblog/"+id}>
//     <div className='border-b p-4 bg-black border-slate-400 pb-2 w-screen max-w-screen-md cursor-pointer '>
//     <div className="flex">
//         <div className="flex justify-center flex-col "><Avtar name={authorname} size="small"/>  </div>
//             <div className="font-extralight pl-2 text-md text-slate-400" >{authorname}</div>
//             <div className=" mx-1 mt-4"><Circle/></div>
//             <div className="pl-2 mt-1 text-gray-400 font-thin text-sm">{publishedAt.slice(0,10)}</div>
//             </div>
       
//         <div className="text-xl font-semibold text-slate-400">{title}</div>
        
//         <div className="font-normal text-md text-slate-400">{content.slice(0,100)+"..."}</div>

//         <div className="text-slate-400 font-normal text-sm">{Math.ceil((content.length)/100)+"minute(s) read"}</div>
      
//         {/* <div className="h-1 w-full bg-slate-200"></div> */}
//         {Image!=""? <div className='flex justify-center'><img src={Image} alt="" className="max-h-64" /></div>:""}
//     </div>
    
//     </Link>
//   )
// }
// function Circle(){
//   return (
//     <div className="size-1 bg-black rounded-full">

//     </div>
//   )
// }

// export default UserblogCard



import { Avtar } from "./Avtar";
import { Link } from 'react-router-dom';

interface BlogCardProps {
  authorname: string;
  title: string;
  content: string;
  publishedAt: string;
  id: string;
  Image: string;
}

const UserblogCard = ({ id, authorname, title, content, publishedAt, Image }: BlogCardProps) => {
  return (
    <Link to={`/usersblog/${id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105">
        <div className="relative">
          {Image && (
            <img src={Image} alt={title} className="w-full h-48 object-cover" />
          )}
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
            <div className="flex items-center space-x-3 text-white">
              <Avtar name={authorname} size="small" />
              <div className="text-sm">{authorname}</div>
            </div>
            <div className="text-xs text-gray-300 mt-1">{publishedAt.slice(0, 10)}</div>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-600 mb-4">{content.slice(0, 150)}...</p>
          <div className="text-gray-500 text-sm">
            {Math.ceil(content.length / 100)} minute(s) read
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserblogCard;
