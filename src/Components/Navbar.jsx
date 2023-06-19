import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const NavbarMain = () => {
  return (
    <div>
        <h1>i am navbar</h1>

        <Link to={"/1"}> <li>Component 1</li> </Link>
        <Link to={"/2"}> <li>Component 2</li> </Link>
        <Link to={"/3"}> <li>Component 3</li> </Link>
        <Link to={"/4"}> <li>Component 4</li> </Link>
        <Link to={"/5"}> <li>Component 5</li> </Link>
       <Outlet/>
    </div>
  )
}

export default NavbarMain