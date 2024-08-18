
// import UserblogCard from '../component/UserblogCard';
// import { useUserBlog } from '../hooks/index';
// import Appbar from './../component/Appbar';


// const UserBlogs = () => {
    
//   const {loading, userblog}= useUserBlog();
  
  
//   if(loading){
//     return <div className=' border-none  h-screen bg-contain bg-center bg-fixed'>
//       <div><Appbar /></div>
//       <div className='mt-20  border-none  h-screen bg-contain bg-center bg-fixed'>
//         <div className='mt-20' >
// <div role="status" className="animate-pulse mt-5">
//     <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
//     <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
//     <div className="flex items-center justify-center mt-4">
//         <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
//         </svg>
//         <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
//         <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
//     </div>
//     <span className="sr-only">Loading...</span>
// </div>
// <div role="status" className="animate-pulse mt-5">
//     <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
//     <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
//     <div className="flex items-center justify-center mt-4">
//         <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
//         </svg>
//         <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
//         <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
//     </div>
//     <span className="sr-only">Loading...</span>
// </div>

// </div>
// </div>
//     </div>
//   }  

//   if (userblog.length==0){
//     return (
//       <>
     
//     <div><Appbar pr={true}/></div>
//     <div className='flex justify-center text-white h-screen bg-[url("yellowbg.webp")]  border-none  bg-contain bg-center bg-fixed'>
//    <div className='mt-20  text-4xl font-extrabold'> No Blog Post Yet</div>
//    </div>
//       </>
//     )
//   }  
//    return (
//     <>
//     <div><Appbar pr={true}/></div>
//     <div className='flex justify-center  bg-[url("yellowbg.webp")]  border-none  bg-contain bg-center bg-fixed'>
       
//     <div className=' max-w-xl '>
//       {userblog?.map((b)=>(
//         <div key={b.id}>
//         <UserblogCard id={b.id} authorname={b.author.name||"Anonymous"} title={b.title} publishedAt={b.published} content={b.content} Image={b.Image?b.Image:""}/>

// </div>
//       ))}
//       </div>
    
//     </div></>
//   )
// } 

// export default UserBlogs


import UserblogCard from '../component/UserblogCard';
import { useUserBlog } from '../hooks/index';
import Appbar from './../component/Appbar';

const UserBlogs = () => {
  const { loading, userblog } = useUserBlog();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Appbar pr={true} />
      <div className="flex-1 mt-16 p-6">
        {loading ? (
          <div className="animate-pulse space-y-6">
            <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            <div className="w-full h-48 bg-gray-300 rounded"></div>
          </div>
        ) : userblog.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <div className="text-gray-700">
              <h1 className="text-3xl font-bold mb-4">No Blog Posts Yet</h1>
              <p className="text-lg">Check back later for updates.</p>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto space-y-6">
            {userblog.map((b) => (
              <UserblogCard
                key={b.id}
                id={b.id}
                authorname={b.author.name || "Anonymous"}
                title={b.title}
                publishedAt={b.published}
                content={b.content}
                Image={b.Image || ""}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBlogs;
