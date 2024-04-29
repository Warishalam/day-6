import React from 'react'
import { Link } from 'react-router-dom'
// import { Route,Routes } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",marginTop:'20px',padding:'20px',justifyContent:"center",gap:'20px'}}>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/about'><h3>About</h3></Link>
        <Link to='/dashboard'><h3>Dashboard</h3></Link>
        <Link to='/todo'><h3>Todo</h3></Link>

    </div>
  )
}

export default Navbar