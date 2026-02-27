import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useLocation, useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectpath = location.state?.path || '/'
    const [user , setuser] = useState("")
    const auth = useAuth();
    const handleLogin = () => {
        auth.login(user)
        navigate(redirectpath, {replace : true})
    }
return (
    <div>
    <label>
        UserName : <input type='text' name='username' placeholder='Username'
        onChange={(e) => setuser(e.target.value)} />
    </label>
    <button type='button' onClick={handleLogin}>Login</button>
    </div>
)
}

export default Login
