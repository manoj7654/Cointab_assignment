import React,{useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import './UserCard.css';

const UserCard = ({ele,refetch}) => {
    function handleAdd(){
        axios.post(`http://localhost:4500/users/create/${ele.id}`)
        .then((result)=>{
       setTimeout(() => {
        refetch()
       }, 500);
    })
    .then((err)=>{console.log(err)})
    }


  return (
    <div className='container' >
                   <div className='card'>
                     <p>Name : {ele.name}</p>
                     <p>Email : {ele.email}</p>
                     <p>Phone : {ele.phone}</p>
                     <p>Company : {ele.company.name}</p>
                     <p>City : {ele.address.city}</p>
                     <p>Website : {ele.website}</p>
                     {ele?.isPresent}
                     {!ele?.isPresent&&<button onClick={handleAdd} className='btn'>Add</button>}
                     {ele?.isPresent&&<Link to={`singleUser/${ele.id}`}><button className='btn'>Open</button></Link>}
                     </div>
                  
    </div>
  )
}

export default UserCard