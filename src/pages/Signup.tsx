
import Quets from './../component/Quets';
import Auth from './../component/Auth';
function Signup() {
    return (
        <div className='  grid grid-cols-1    lg:grid-cols-2'>
            <div><Auth type={"signup"}/></div>
         <div><Quets/></div>
    
        </div>
    )   
}

export default Signup