import { Routes, Route } from "react-router-dom";
import ReadBook from "./readBook";
import BookList from "./bookList";
import UserDashboard from "./userDashboard";
import UserNavbar from "./userNavbar";
const UserHome = () => {
    return ( 
        <div className="userhome">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>} />
                <Route path="book-list" element={<BookList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/> 

            </Routes>


        </div>
     );
}
 
export default UserHome;