import { useState, useEffect} from "react";
import '../styles/userList.css'

const UserList = () => {
    let[user,setUser]=useState([])
    useEffect(()=>{
        let fetchData= async()=>{
            
        let response= await fetch('http://localhost:8000/users')
        let data= await response.json()
        setUser(data)
        }
        fetchData()
        
    },[])
    let remove=(id,name)=>{
        setUser(user.filter(x=>x.id!==id))
        alert(`${name} has been removed`)
    }
    return ( 
        <div className="userList">
            <h1>User List :{user.length}</h1>
            <div className="user">
                {
                    user.map(data=>(
                        <div className="user_list">
                        <h4>Name:{data.name}</h4>
                        <h6>Age:{data.age}</h6>
                        <h6>Email:{data.email}</h6>
                        <h6>Phone:{data.phoneNumber}</h6>
                        <button onClick={()=> remove(data.id,data.name)}>Remove</button>
                    </div>

                    ))
                    
                }
            </div>
        </div>
     );
}
 
export default UserList;