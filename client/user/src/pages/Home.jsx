import React, { useState } from 'react'
import UserCard from '../component/UserCard'
import "./Home.css" 

const Home = () => {
    const [user,setUser]=useState([])
    async function fetchData() {
      try {
        const result = await fetch("http://localhost:4500/users/fetchData",{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }
        });
        
        const res = await result.json();
       if(result.ok){
        setUser(res);
       }
      } catch (error) {
        console.log(error);        
      }
    }
    const handleFetch=()=>{
      fetchData()
   }

    return  (
      <div >
        <h1>Cointab SE-ASSIGNMENT</h1>
        <div className="main">
          <button className="btns" onClick={handleFetch}>All Users</button>
        </div>
        <div>
            {user.map((ele)=>{
                return(
                   <UserCard ele={ele} refetch={handleFetch} />
                )
            })}
        </div>
      </div>
    );
}

export default Home