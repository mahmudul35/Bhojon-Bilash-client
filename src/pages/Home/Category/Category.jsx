import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";


export const Category = () => {
  return (
    <>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="slide1" />
            <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="slide2" />
            <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="slide3" />
            <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="slide4" />
            <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="slide5" />
            <h2 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h2>
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}
