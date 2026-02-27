import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Profile= () => {
    const navigate = useNavigate()
    const auth =useAuth()
    const handleLogout = () =>{
        auth.logout()
        navigate('/')

    }
    return <div>
        <h2>Welcome {auth.user}</h2>
        <button type="button" onClick={handleLogout}>Logout</button>
    </div>
};
export default Profile;