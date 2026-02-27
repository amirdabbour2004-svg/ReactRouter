import React from 'react'
import { useParams } from 'react-router-dom'
const Usersdetails = () => {
const params = useParams()
const userId = params.userId
return (
    <div>
    <p>Users Details About {userId}</p>
    </div>
)
}

export default Usersdetails
