import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import img1 from '../../assets/banner/image5.jpg'
import img2 from '../../assets/banner/image6.jpg'
import img3 from '../../assets/banner/image8.jpg'
import img4 from '../../assets/banner/image9.jpg'
import img5 from '../../assets/banner/image7.jpg'



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
                    <img className='img1' src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <img className='img1' src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <img className='img1' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <img className='img1' src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <img className='img1' src={img1} alt="" />
                </SwiperSlide>
            </Swiper>

        </>
    );
}
export default Banner