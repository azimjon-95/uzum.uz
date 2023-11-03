import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import img from '../../assets/banner/images.jpg'

function Banner() {
    return (
        <>
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
                className="mySwiper"
            >
                <SwiperSlide className='SwiperSlide'>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <img src={img} alt="" />
                </SwiperSlide>
                

            </Swiper>
        </>
    );
}
export default Banner