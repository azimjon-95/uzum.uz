import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link to="/">
                <h1>Logo</h1>
            </Link>


            <div className="navBtn">
                <Link to="about">
                    <button>About</button>
                </Link>
                <Link to="info">
                    <button>Info</button>
                </Link>
                <Link to="contact">
                    <button>Contact</button>
                </Link>

                <button>SingIn</button>

            </div>
        </div>
    )
}

export default Navbar
