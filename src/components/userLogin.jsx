
import { useNavigate } from "react-router-dom";
import '../styles/userlogin.css'
const USerLogin = () => {
    let navigate=useNavigate()
    let userLogin=()=>{
        navigate('/user/')
    }
    return ( 
        <div className="userlogin">
            <div className="form">
                <h1 style={{color:"whitesmoke", fontSize:50}}>Login as User</h1>
                <div className="form_input">
                    <form action="" onSubmit={userLogin}>
                        <div className="email">
                        <input type="email" placeholder="email address" required   />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="enter password" required  />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default USerLogin;