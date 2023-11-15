import React from 'react';
import './style.css';
import image4 from "../../assets/banner/df2.png"


const Contact = () => {
    return (
        <div className='df'>
        <img src={image4} alt='' />
        <h1 className='df1'>В корзине пока нет товаров</h1>
        <h1 className='df2'>Начните с подборок на главной странице или найдите нужный товар через поиск</h1>
        <button className='button1'>Saxifaga otish</button>
    </div>
    )
}

export default Contact