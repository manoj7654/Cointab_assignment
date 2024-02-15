import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import axios from "axios"
import UserDetail from './UserDetail'
const SingleUser = () => {
    const params=useParams()
    const [post,setPost]=useState([])
    const [isPresent,setIsPresent]=useState(false)
     
    useEffect(()=>{
        axios.get(`https://muddy-bee-gear.cyclic.app/post/getPost?userId=${params.userId}`)
        .then((result)=>{
           console.log(result.data)
           setPost(result.data.data)
       })
       .catch((err)=>{console.log(err)})
    },[])

function bulkAdd(){
    axios.post(`https://muddy-bee-gear.cyclic.app/post/bulkAdd/${params.userId}`,{data:post})
    .then((result)=>{
        // console.log(result.data[0].isPresent)
        setIsPresent(result.data)

    })
    .catch((err)=>{console.log(err)})
   }

   function download(){
    axios.get(`https://muddy-bee-gear.cyclic.app/post/download/${params.userId}`)
    .then((result)=>{
        console.log(result)
        
        setIsPresent(result.data)

    })
    .catch((err)=>{console.log(err)})
   }
  return (
    <div>
        {!isPresent&&<button onClick={bulkAdd}>Bulk Add</button>}
         {isPresent&&<button onClick={download}>Download In Excel</button>}
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