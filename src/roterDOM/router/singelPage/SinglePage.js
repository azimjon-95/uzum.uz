import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import './style.css'
import { useParams } from 'react-router';
import Data from '../../Data';
import rasm1 from '../../img/rasm1.jpg'
import rasm2 from '../../img/rasm2.jpg'
import rasm3 from '../../img/rasm3.jpg'
import rasm4 from '../../img/rasm4.jpg'
import rasm5 from '../../img/rasm5.jpg'
import rasm6 from '../../img/rasm6.jpg'
import { BsApple } from 'react-icons/bs';
import { BsGooglePlay } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { PiCaretRight } from "react-icons/pi";
import { Link } from "react-router-dom";

const SinglePage = () => {
    const { id } = useParams()


    const result = Data?.filter(i => i.id == id)


    return (
        <>
            <div>
                <div className='Nav'>
                    <p>Главная</p>
                    <b>/</b>
                    <p>Bce категории</p>
                    <b>/</b>
                    <p>Одежда </p>
                    <b>/</b>
                    <p>Мужская одежда</p>
                    <b>/</b>
                    <p>Худи и свитшоты</p>
                    <b>/</b>
                    <p>Толстовки</p>
                </div>
                {
                    result?.map((Value, inx) => {
                        return (
                            <div key={inx} className="Cards1">
                                <div className='imgg'>
                                    <div className='imgg1'>
                                        <img src={rasm1} alt='' />
                                    </div>
                                    <div className='img2'>
                                        <img src={rasm2} alt='' />
                                    </div>
                                    <div className='img3'>
                                        <img src={rasm3} alt='' />
                                    </div>
                                    <div className='img4'>
                                        <img src={rasm4} alt='' />
                                    </div>
                                    <div className='img5'>
                                        <img src={rasm5} alt='' />
                                    </div>
                                    <div className='img6'>
                                        <img src={rasm6} alt='' />
                                    </div>
                                    {/* <div className='img7'></div>
                                <div className='img8'></div> */}
                                </div>
                                <div className='rasm'>
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper1"
                                    >
                                        <SwiperSlide>
                                            <img className='rasm1' src={rasm1} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className='rasm1' src={rasm2} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className='rasm1' src={rasm3} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className='rasm1' src={rasm4} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className='rasm1' src={rasm5} alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className='yozuv'>
                                    <div className='iconn'>
                                        <div className='iconn2'>
                                            <p><FaStar /></p>
                                            <n>5.0( 1283 оценки )</n>
                                            <g>Более 31500 заказов</g>
                                        </div>
                                        <div className='iconn1'>
                                            <p><FaRegHeart /></p>
                                            <n>B желания</n>
                                        </div>
                                    </div>
                                    <div className='malumot'>
                                        <div className='Спортивные'>
                                            <p>Спортивные женские трико Aklt446-2 Li-Ning</p>
                                        </div>
                                        <div className='Продавец'>
                                            <div className='aaaa'>
                                                <p>Продавец:</p>
                                                <p>Доставка:</p>
                                            </div>
                                            <div className='bbbb'>
                                                <p>Li-Ning</p>
                                                <p>1 день, бесплатно</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rangi'>
                                        <div className='Цвет'>
                                            <p>Цвет:</p>
                                            <b>Черный</b>
                                        </div>
                                        <div className='rasmi'>
                                            <img src={rasm6} alt='' />
                                        </div>
                                    </div>
                                    <div className='razmer'>
                                        <p>Размер:</p>
                                        <div className='x'>
                                            <div className='boxx1'>
                                                <p>S</p>
                                            </div>
                                            <div className='boxx1'>
                                                <p>M</p>
                                            </div>
                                            <div className='boxx1'>
                                                <p>L</p>
                                            </div>
                                            <div className='boxx1'>
                                                <p>XL</p>
                                            </div>
                                            <div className='boxx1'>
                                                <p>XXL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Количество'>
                                        <div className='y'>
                                            <p>Количество:</p>
                                        </div>
                                        <div className='plusMinus'>
                                            <div className='plus'>
                                                <p className='minus'>-</p>
                                                <g className='minus'>1</g>
                                                <b className='minus'>+</b>
                                            </div>
                                            <n>B наличии 9</n>
                                        </div>
                                    </div>
                                    <div className='werty'>
                                        <p>Цена:</p>
                                        <div className='narxi'>
                                            <b>508 000 сум</b>
                                            <p><del>847 000 сум</del></p>
                                        </div>
                                    </div>
                                    <div className='рассрочку'>
                                        <div className='cum'>
                                            <p>От 60 960 сум/мес</p>
                                        </div>
                                        <p>в рассрочку</p>
                                        <b><PiCaretRight /></b>
                                    </div>
                                    <div className='wwww'>
                                        <div className='uzatuvchi1'>
                                            <p>Добавить в корзину</p>
                                        </div>
                                        <div className='uzatuvchi2'>
                                            <p>Купить в 1 клик</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <img src={Value.img} alt="" />
                            <h3>{Value.name}</h3>
                            <b>Model: {Value.model}</b>
                            <p>Price: {Value.price}</p> */}

                            </div>
                        )
                    })

                }
            </div>
            {/* <div className="Footer">
                <div className="FooterYozuv1">
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
            </div> */}
        </>
    )
}

export default SinglePage
