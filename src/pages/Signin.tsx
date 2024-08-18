// import Quets from './../component/Quets';
// import Auth from './../component/Auth';

// const Signin = () => {
//   return (
//     <div className='grid grid-cols-1 lg:grid-cols-2 h-screen'>
//       <div className="flex justify-center items-center bg-gray-100">
//         <Auth type="signin" />
//       </div>
//       <div className="hidden lg:flex justify-center items-center bg-gray-300">
//         <Quets />
//       </div>
//     </div>
//   );
// }

// export default Signin;



import Quets from './../component/Quets';
import Auth from './../component/Auth';

const Signin = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-screen'>
      <div className=''>
        <Auth type={"signin"} />
      </div>
      <div className='hidden lg:flex items-center justify-center bg-gray-300'>
        <Quets />
      </div>
    </div>
  )
}

export default Signin;

