import React from 'react'


import {Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import '../MainSlide.css';
import styles from '../MainSlide.module.css';




export default function MainSlide() {

  const navigate = useNavigate();
  return (
    
    <div className={styles.main_swiper_slide}>

    
   <Swiper
   modules={[Navigation, Pagination, Scrollbar,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      // scrollbar= {{draggable: true}}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
     autoplay={{delay: 3000, disableOnInteraction: false }}
     loop={true}
    >
   <SwiperSlide onClick={() => {navigate('/hand');window.scrollTo(0, 0); }}>
        <img src="/img/main_slide/01.jpg" alt="1번 배너" />
        <div className={styles.main_txt}>
        <p>WEROH</p>
        <p>"HAND CARE"</p>
        <p>#촉촉한 #수분 #저자극</p>
        <p>자주 씻어도 건조함 없이 촉촉한 손 </p>
        </div>
     
      </SwiperSlide>

       <SwiperSlide onClick={() => {navigate('/body');window.scrollTo(0, 0); }}>
        <img src="/img/main_slide/02.jpg" alt="2번 배너" />
           <div className={styles.main_txt}>
        <p>WEROH</p>
        <p>"BODY CARE"</p>
        <p>#부드러운 #보습 #향기</p>
        <p>유해성분 걱정 없이 부드러운 바디로션 </p>
        </div>
      </SwiperSlide>

        <SwiperSlide onClick={() => {navigate('/body');window.scrollTo(0, 0); }}>
        <img src="/img/main_slide/03.jpg" alt="3번 배너" />
           <div className={styles.main_txt}>
        <p>WEROH</p>
        <p>"HAND & BODY" </p>
        <p>#수분 #저자극 #보습 #촉촉한</p>
        <p>핸드 & 바디 멀티 제품</p>
        </div>
      </SwiperSlide>
  
    </Swiper>

    </div>
  );
};