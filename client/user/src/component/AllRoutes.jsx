import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import SingleUser from './SingleUser'


const AllRoutes = () => {
  return (
    <div>
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/singleUser/:userId" element={<SingleUser />} />
    </Routes>
</div>
  )
}

export default AllRoutes