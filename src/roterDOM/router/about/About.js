import React, { useState } from 'react';
import './style.css'


const About = () => {
    return (
        <div className='div1'>
            <div className='div2'>
                <h1><b>+</b></h1>
                <h2>Ввадите номер телефона</h2>
                <p>Отправим смс с кодом подтвержденияа</p>
                <input placeholder='00. 00-000-00-00' ></input>
                <button>получить код</button>
                <p>Авторизуясь, вы соглашаетесь c
                <span>политикой обработки персональных данных</span></p>



            </div> 
        </div>
    )
}

 export default About