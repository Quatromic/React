import { useState } from "react"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <>
            <nav className="navbar">
                <h1>Inclyne Studios</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/Create">New Blog</Link>
                </div>
                <div className="line"></div>
            </nav>
        </>
    )
}

export default Navbar