import React, { useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
const UserDetail = () => {
    const [user,setUser]=useState([])
    const params=useParams()

    // axios.get(`http://localhost:4500/users/single?id=${params.userId}`)
    //     .then((result)=>{
    //        console.log(result.data)
    //        setUser(result.data.data)
    //    })
  return (
    <div>
       <p>{user.name}</p>
        
    </div>
  )
}

export default UserDetail