
import Quets from './../component/Quets';
import Auth from './../component/Auth';
function Signup() {
    return (
        <div className=' bg-[url("https://res.cloudinary.com/bloggingwebsite/image/upload/v1721374530/bg_rtvnsm.jpg")] grid grid-cols-1  bg-cover bg-center bg-fixed   lg:grid-cols-2'>
            <div><Auth type={"signup"}/></div>
         <div><Quets/></div>
    
        </div>
    )   
}

export default Signup