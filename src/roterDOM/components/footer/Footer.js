import React from "react";
import './style.css'
import { BsApple } from 'react-icons/bs';
import { BsGooglePlay } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="Footer">
            <button>Показать ещё 20</button>
            <div className="FooterYozuv">
                <div className="box1">
                    <b>O нас</b>
                    <Link to="Onas">
                        <p>Пункты выдачи</p>
                    </Link>
                    <Link to="Vaksina">
                        <g>Вакансии</g>
                    </Link>
                </div>
                <div className="box2">
                    <b>Пользователям</b>
                    <p>Связаться c нами</p>
                    <p>Вопрос - Ответ</p>
                </div>
                <div className="box3">
                    <b>Для предпринимателей</b>
                    <p>Продавайте на Uzum</p>
                    <p>Вход для продавцов</p>
                </div>
                <div className="box4">
                    <p>Скачать приложение</p>
                    <g><BsApple />AppStore</g>
                    <g><BsGooglePlay />Google Play</g>
                    <h5>Uzum в соцсетях</h5>
                    <div className="icons">
                        <Link to="https://www.instagram.com/uzum.market/">
                            <p><BsInstagram /></p>
                        </Link>
                        <Link to="https://web.telegram.org/k/">
                            <b><BsTelegram /></b>
                        </Link>
                        <Link to="https://www.youtube.com/results?search_query=uzum+market">
                            <n><AiFillYoutube /></n>
                        </Link>
                        <Link to="https://www.facebook.com/?locale=ru_RU">
                            <g><BiLogoFacebookSquare /></g>
                        </Link>
                    </div>
                </div>
                 <div className="sana">
                    <div className="Bce">
                        <p>Соглашение o конфиденциальности</p>
                        <p>Пользовательское соглашение</p>
                    </div>
                    <div className="uzum">
                        <p>«2023© 000 «UZUM MARKET». ИНН 309376127. Bce права защищены»</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer