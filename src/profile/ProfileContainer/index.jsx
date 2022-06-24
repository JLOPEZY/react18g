import { Outlet, Link } from "react-router-dom";
import "./ProfileContainer.css"

export default function ProfileContainer () {
    return(
        <div>
            <nav>
                <Link to="">Home</Link>
                <Link to="edit">Edit</Link>
                <Link to="detail">Detail</Link>
            </nav>

        <Outlet />
        
        </div>


    );
}