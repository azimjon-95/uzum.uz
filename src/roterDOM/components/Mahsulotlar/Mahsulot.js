import React, { useState } from "react";
import './mahsulot.css'
import Data from "../../Data"
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';
import { TbShoppingCartPlus } from 'react-icons/tb';
import rasmii from '../../img/rasmii.jpg'
import { FaChevronRight } from "react-icons/fa6";
const Banner = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="Mahsulot">
            <div className="BoxCart">
                {Data?.map((value, inx) => {
                    return (
                        <div className="Cards">
                            <img src={value.img} alt="" />
                            <b><AiOutlineHeart /></b>
                            <div className="icon">
                                <button onClick={() => setOpen(true)}><TbShoppingCartPlus /></button>
                            </div>
                            <Link to={`mahsulot/${value.id}`}>
                                <h4>{value.name}</h4>
                            </Link>
                            <p>{value.price1}</p>
                            <i><del>{value.price2}</del></i>
                            <h3>{value.price}</h3>
                        </div>
                    )
                })

                }
            </div>
            <div className={`${open ? "modelBox" : "modelBoxNone"}`}>
                <div className="model">
                    <h1 className="hh" onClick={() => setOpen(false)}>+</h1>
                    <div className="ikki">
                        <div className="rasmii">
                            <img src={rasmii} alt="" />
                        </div>
                        <div className="cartsss">
                            <p>Вся информация o товаре</p>
                            <n><FaChevronRight /></n>
                        </div>
                    </div>
                    <div className="uch">
                        <div className="Костюм">
                            <p>Костюм спортивный, унисекс</p>
                        </div>
                        <div className="rangii">
                            <div className="yozuvv">
                                <p>Цвет:</p>
                                <b>Тёмно-зелёный</b>
                            </div>
                            <div className="rasmga">
                                <img src={rasmii} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner

{/* {
    open ?
        <button onClick={() => setOpen(false)}><TbShoppingCartPlus /></button>
        :
        <button onClick={() => setOpen(true)}><TbShoppingCartPlus /></button>
} */}