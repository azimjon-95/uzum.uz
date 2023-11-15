import React, { useState } from 'react';
import './style.css';
// import image4 from "../../assets/banner/df2.png"

import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';
import { TbShoppingCartPlus } from 'react-icons/tb';
const Contact = () => {
    return (
        <>
            {/* <div className='df'>
            <img src={image4} alt='' />
           <h1 className='df1'>В корзине пока нет товаров</h1>
            <h1 className='df2'>Начните с подборок на главной странице или найдите нужный товар через поиск</h1>
            <button className='button1'>Saxifaga otish</button>
        </div> */}

            <h1 className='text1'>Basha korzina <span>3 Tobar</span></h1>
            <div className='container'>
                <div className='boxs'>
                    <div className='box'></div>

                    <div className='box1'>

                    </div>
                    <div className='box2'>

                    </div>
                    <div className='box3'>

                    </div>
                    <div className='itogo'></div>
                </div>
            </div>
        </>
    )
}

export default Contact