import React from 'react'
import {NavLink} from "react-router-dom"
const Navbar = () => {
    return (
        <div style={{
        height:"50px", 
        padding: "10px",
        alignItems: "center",
        textDecoration: "none",
        backgroundColor: "grey",
        borderRadius: "5px",
        fontSize: "1.5rem",
        color: "white"}}>
      <NavLink to="/" style={{textDecoration:"none",color:"white"}}>Home</NavLink>
        </div>
      )
}

export default Navbar