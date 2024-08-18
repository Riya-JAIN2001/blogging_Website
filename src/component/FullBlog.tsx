// import axios from "axios"
// import Appbar from "./Appbar"
// import { Avtar } from "./Avtar"
// import { BackendUrl } from "../config"
// import { useNavigate } from "react-router-dom"

 

// export interface Blog{
//   content:string,
//  id:string,
//   title:string,
//   author:{name:string}
//   published:string, 
//   Image?:string 
// }
//  const 
 
//  FullBlog = ({blog, user}:{blog:Blog, user:Boolean}) => {
//   const navigate=useNavigate()
//    return (
//     <div>
//       <Appbar pr={true}/>
//     <div className='flex justify-center bg-[url("yellowbg.webp")]  bg-contain bg-center bg-fixed'>
//      <div className="grid lg:grid-cols-12 px-24 w-full  grid-cols-1   pt-20 max-w-screen-2xl">
//      <div className="lg:col-span-8">
//         <div className="text-3xl font-extrabold  text-gray-400">
//             {blog.title}
//         </div>
//         <div className="text-slate-500 pt-2 ">
//           posted on {blog.published.slice(0,10)} 
//         </div>
//        <div className='pt-4  text-gray-400'>{blog.content}</div>
      
//      </div>
//      <div className="lg:col-span-4 ">
//      <div className="text-slate-600 text-lg  "> Author</div>
//         <div className="flex w-full">
//           <div className="pr-4 flex flex-col justify-center"><Avtar name={blog.author.name||"Anonymous"} size="small" /></div>
//        <div>
//        <div className="lg:text-xl lg:font-bold  text-gray-400 font-medium">{blog.author.name||"Anonymous"}</div>
     
//      <div className="pt-2 text-slate-500" >
//       Random catche phrase about the authors ability to grab the user's attention
//      </div> 
//        </div>
//         </div>
//     {user==true? (
//       <div className="mt-5">
//       <button type="button" onClick={async()=>{
//         alert("Your Post is Deleting");
//         try{
          
//         await axios.delete(`${BackendUrl}/api/v1/blog/delete/${blog.id}`,{
//           headers:{Authorization:"Bearer "+localStorage.getItem("token")}
//         });}catch(e){
//           console.log(e)
//         }
//         alert("Post has been deleted");
//         navigate("/userblogs")
  
//       }} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Delete</button>
//     <button type="button" onClick={async()=>{
//        navigate(`/edit/${blog.id}`)
        
        
  
//       }} className="text-white w-28 bg-yellow-400 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Edit</button>
  
//       </div>
//     ):null}
    
//      </div>
//      </div>
//      </div>
//      <div className='item-center  justify-center bg-[url("https://res.cloudinary.com/bloggingwebsite/image/upload/v1721374530/bg_rtvnsm.jpg")] h-screen bg-contain bg-center bg-fixed flex '>
//       {blog.Image!=""?  <div className=""><img src={blog.Image} alt="" className="w-100 h-80 " /></div>:""}
//       </div>
//      </div>
//    )   
//  }
 
//  export default FullBlog  



import axios from "axios";
import Appbar from "./Appbar";
import { Avtar } from "./Avtar";
import { BackendUrl } from "../config";
import { useNavigate } from "react-router-dom";

export interface Blog {
  content: string;
  id: string;
  title: string;
  author: { name: string };
  published: string;
  Image?: string;
}

const FullBlog = ({ blog, user }: { blog: Blog; user: Boolean }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Appbar pr={true} />
      <div className="flex justify-center bg-gray-100">
        <div className="grid lg:grid-cols-12 px-4 lg:px-24 w-full pt-20 max-w-screen-2xl">
          <div className="lg:col-span-8">
            <div className="text-3xl font-extrabold text-gray-800">
              {blog.title}
            </div>
            <div className="text-gray-600 pt-2">
              Posted on {blog.published.slice(0, 10)}
            </div>
            <div className="pt-4 text-gray-700">{blog.content}</div>
          </div>
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="text-gray-700 text-lg">Author</div>
            <div className="flex w-full mt-2">
              <div className="pr-4 flex flex-col justify-center">
                <Avtar name={blog.author.name || "Anonymous"} size="small" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-800">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-gray-600">
                  Random catchy phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
            {user && (
              <div className="mt-5">
                <button
                  type="button"
                  onClick={async () => {
                    alert("Your Post is Deleting");
                    try {
                      await axios.delete(
                        `${BackendUrl}/api/v1/blog/delete/${blog.id}`,
                        {
                          headers: {
                            Authorization: "Bearer " + localStorage.getItem("token"),
                          },
                        }
                      );
                    } catch (e) {
                      console.log(e);
                    }
                    alert("Post has been deleted");
                    navigate("/userblogs");
                  }}
                  className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => navigate(`/edit/${blog.id}`)}
                  className="text-white w-28 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {blog.Image && (
        <div className="flex justify-center mt-10 bg-gray-100 py-10">
          <img
            src={blog.Image}
            alt=""
            className="max-w-full max-h-80 object-contain rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default FullBlog;
