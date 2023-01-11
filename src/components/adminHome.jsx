import AdminNavbar from "./navbarAdmin";
import AdminDashboard from "./adminDashboard";
import { Routes,Route } from "react-router-dom";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readBook";
import AddUser from "./addUser";
import AddBook from "./addBooks";


const AdminHome=()=>{
    return(
        <div className="adminhome">
            <AdminNavbar/>
            <Routes>
            <Route path="/" element={<AdminDashboard/>}/>
            <Route path="/book-list" element={<BookList/>}/>
            <Route path="/user-list" element={<UserList/>}/>
            <Route path="/book-list/:id" element={<ReadBook/>}/> 
            <Route path="/add-user" element={<AddUser/>} />
            <Route path="/add-books" element={<AddBook/>}/>
            </Routes>
            
        </div>
    )
}
export default AdminHome;