import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import axios from "axios"
import UserDetail from './UserDetail'
const SingleUser = () => {
    const params=useParams()
    const [post,setPost]=useState([])
    const [isPresent,setIsPresent]=useState(false)
     
    useEffect(()=>{
        axios.get(`http://localhost:4500/post/getPost?userId=${params.userId}`)
        .then((result)=>{
           console.log(result.data)
           setPost(result.data.data)
       })
       .then((err)=>{console.log(err)})
    },[])

function bulkAdd(){
    axios.post(`http://localhost:4500/post/bulkAdd/${params.userId}`,{data:post})
    .then((result)=>{
        // console.log(result)
        setIsPresent(result.data.alreadyPresent)

    })
    .then((err)=>{console.log(err)})
   }
  return (
    <div>
        {!isPresent&&<button onClick={bulkAdd}>Bulk Add</button>}
         {isPresent&&<button>Download In Excel</button>}
        {post.map((ele)=>{
            return(
                <div>
                    <UserDetail />
                    <p>Title : {ele.title}</p>
                    <p>Body : {ele.body}</p>
                </div>
            )
        })}
    </div>
  )
}

export default SingleUser