import { Link } from "react-router-dom";
const UserNavbar = () => {
    return (
        <div className="usernavbar">
            <div className="navbar">
                <div className="userportal">
                    <h1>USER PORTAL👤</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/user/">DASHBOARD</Link></li>
                        <li><Link to="/user/book-list">BOOK LIST</Link></li>
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

export default UserNavbar;