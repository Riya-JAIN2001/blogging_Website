import Quets from './../component/Quets';
import Auth from './../component/Auth';

const Signin = () => {
  return (
    <div className=' bg-[url("https://res.cloudinary.com/bloggingwebsite/image/upload/v1721374530/bg_rtvnsm.jpg")] grid grid-cols-1  bg-cover bg-center bg-fixed   lg:grid-cols-2'>
            <div><Auth type={"signin"}/></div>
         <div className="hidden lg:block"
         ><Quets/></div>
    
        </div>
  )
}

export default Signin