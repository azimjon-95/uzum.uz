import React from 'react';
import "../navbar/style.css"
import { Link } from 'react-router-dom';
import uzumLogo from "../../assets/banner/uzum.logo.png"
import Df3 from "../../assets/banner/df3.png"
import { FiSearch } from "react-icons/fi"
import { IoMdHeartEmpty } from "react-icons/io"
import { CiShoppingBasket } from "react-icons/ci"
import { CiUser } from "react-icons/ci"




const Navbar = () => {
  
    return (
        <>
            <div className='Navbar'>
              
                <div className='position'>
                    <img className='logoimage' width={35} src={uzumLogo} alt='' />
                    <Link to="/">
                        <h1 className='uzumlogo'>uzum market</h1>
                    </Link>
                </div>
                <button className='katalogButton'>Katalog</button>
                <div className='input_icon'>
                    <input placeholder='Mahsulot qidirish' className='inputNavbar' type='text' />
                    <p className='icon1'>< FiSearch /></p>
                </div>
                <div className="navBtn">
                    <div className='about2'>
                        <p className='icon4'><CiUser /></p>
                        <Link to="about">
                            <button className='button2'>Войти</button>
                        </Link>
                    </div>
                    <div className='info2'>
                        <p className='icon3'><IoMdHeartEmpty /></p>
                        <Link to="info">
                            <button className='button21'>Избранной</button>
                        </Link>
                    </div>
                    <div className='contact2'>
                        <p className='icon2'><CiShoppingBasket /></p>
                        <Link to="contact">
                            <button className='button22'>Корзина</button>
                        </Link>
                    </div>

                </div>
            </div>
            <div className='Navbar1'>
                <div className='name10'>

                    <img className='df4' src={Df3} alt='' />
                    <h1 className='NavbarLogo2'>Xalyalniy rassrochka</h1>
                </div>

                <h1 className='NavbarText'>Elektronika</h1>
                <h1 className='NavbarText'>Bitoviy Texnika</h1>
                <h1 className='NavbarText'>Odejda</h1>
                <h1 className='NavbarText'>Obuvi</h1>
                <h1 className='NavbarText'>Kpacota</h1>
                <h1 className='NavbarText'>Zdorove</h1>
                <h1 className='NavbarText'>Tovari Dlya Doma</h1>
                <h1 className='NavbarText'>Uy remont</h1>
                <h1 className='NavbarText'>Eshe</h1>
            </div>
        </>

    )
}

export default Navbar
