import React from 'react'
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './index.css'
import { useAuth } from '../Authentication/UseAuth'

export default function Ho() {

  return (
    <div className='abc'>
        <Link to = "/home">Home</Link>
        <Link to = "/users">All Users(Admin)</Link>
        <Link to = "/login">Login</Link>
        <Link to = "/profile">Profile(protected)</Link>
        <Link to = "/logout">Log Out</Link>
        {/* <button onClick={exit}>Log Out</button> */}
        {/* <Link to = "/admin">Login Options</Link> */}
        <Outlet/>
        
        
        {/* <button onClick={()=> {navigate("/about")} }> About </button> */}
        {/* <Navigate
        to = "/about"
        /> */}
        {/* <NavLink
        to="/about"
        >Here</NavLink> */}


    </div>
  )
}