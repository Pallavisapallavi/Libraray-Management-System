import { Link } from "react-router-dom";
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return (
        <div className="adminnavbar">
            <div className="navbar">
                <div className="adminportal">
                    <h1>AdminPortal👤</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/admin/">DASHBOARD</Link></li>
                        <li><Link to="/admin/add-books">ADD BOOKS</Link></li>
                        <li><Link to="/admin/add-user">ADD USER</Link></li>
                        <li><Link to="/admin/book-list">BOOK LIST</Link></li>
                        <li><Link to="/admin/user-list">USER LIST</Link></li>
                        <li><Link to="/">LOGOUT</Link></li>

                    </ul>
                </div>
                {/* <div className="logout">
                    <button>LOGOUT</button>
                </div> */}

            </div>
        </div>
      );
}
 
export default AdminNavbar;