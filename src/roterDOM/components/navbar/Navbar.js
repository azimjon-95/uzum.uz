import React from 'react';
import "../navbar/style.css"
import { Link } from 'react-router-dom';
import uzumLogo from "../../assets/banner/uzum.logo.png"
import Df3 from "../../assets/banner/df3.png"
import { FiSearch } from "react-icons/fi"



const Navbar = () => {
    return (
        <>
            <div className='tepabaner'>
                <div className='shahar'>
                    <p>Shahar:</p>
                    <b>Toshkent</b>
                </div>
                <h5>Topshirish punktlari</h5>
                <h5>Buyurtmangizni 1 kunda yetkazibberamiz !</h5>
                <div className='javoblar'>
                    <b>savol-javoblar</b>
                   </div> 
                <h4>Buyurtmalarim</h4>
                <select className='Til' >
                        <option value="0000">Ruscha</option>
                        <option value="111111">Uzbekcha
                        </option>
                    </select>
            </div>

            <div className='Navbar'>
            

                <Link to="/">
                    <h1 className='uzumlogo'>uzum market</h1>
                </Link>
                <button className='katalogButton'>Katalog</button>
                <input placeholder='Mahsulot qidirish' className='inputNavbar' type='text' />
                <p className='icon1'>< FiSearch /></p>
                <img className='logoimage' width={35} src={uzumLogo} alt='' />
                <div className="navBtn">
                    <Link to="about">
                        <button className='button2'>Войти</button>
                    </Link>
                    <Link to="info">
                        <button className='button21'>Избранной</button>
                    </Link>
                    <Link to="contact">
                        <button className='button22'>Корзина</button>
                    </Link>



                </div>
            </div>
            <div className='Navbar1'>
                <div className='name10'>

                    <img className='df4' src={Df3} alt='' />
                </div>
                <h1 className='NavbarLogo2'>Xalyalniy rassrochka</h1>

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
