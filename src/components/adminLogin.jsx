import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/admin.css'

const AdminLogin=()=>{
    let adminLogin=(e)=>{
        e.preventDefault();
        let data={email,password}
        if(email=="pallu@123" && password==4444){
            navigate('/admin/')
        }
        else{
            alert("Invalid email or password")
        }
        // console.log(data)

    }
    let[email,setemail]=useState("")
    let[password,setpassword]=useState("")
    let navigate=useNavigate()
    return(
        <div className="adminlogin">
            <div className="form">
                <h1 style={{color:"whitesmoke", fontSize:50}}>Login as Admin</h1>
                <div className="form_input">
                    <form action="" onSubmit={adminLogin}>
                        <div className="email">
                        <input type="email" placeholder="email address" required  value={email} onChange={(e)=>setemail(e.target.value)} />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="enter password" required value={password} onChange={(e)=>setpassword(e.target.value)} />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default AdminLogin