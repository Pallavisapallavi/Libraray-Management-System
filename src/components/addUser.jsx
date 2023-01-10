import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {

    let[name,setName]=useState("")
    let[age,setAge]=useState("")
    let[email,setEmail]=useState("")
    let[phoneNumber,setphoneNumber]=useState("")
    let navigate=useNavigate();
    let submit=(e)=>{
        e.preventDefault();
        let data={name,age,phoneNumber,email}
        fetch('http://localhost:8000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('user added successfully')
        navigate('/admin/user-list')


    }


    return (
        <div className="adduser">
            <h1> ADD USER</h1>
            <div className="userform">
                <form action="" onSubmit={submit}>
                    <div className="name">
                        <input type="text" required placeholder="enter user name" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="age">
                        <input type="number" min="1" required placeholder="enetr user age" value={age} onChange={(e)=>setAge(e.target.value)} />
                    </div>
                    <div className="email">
                        <input type="email" required placeholder="enter user email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="phno">
                        <input type="tel" minLength="10" maxLength="10" required placeholder="enter user phno" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} />
                    </div>
                    <button>ADD USER</button>
                </form>

            </div>
        </div>
    );
}

export default AddUser;