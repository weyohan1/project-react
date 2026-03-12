import React from 'react'


import {Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';


import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// import '../BestSlide.css';
import styles from '../BestSlide.module.css';


export default function BestSlide() {

  const navigate = useNavigate();

  return (
    <div className={styles.best_item_box}>

    
   <Swiper
   modules={[Navigation, Pagination, Scrollbar,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{clickable: true}}
   
     autoplay={{delay: 3000, disableOnInteraction: false ,pauseOnMouseEnter: true}}
     loop={true}
    >
  <SwiperSlide onClick={() => {navigate('/body');window.scrollTo(0, 0); }}>
    <img src={process.env.PUBLIC_URL + "/img/best_slide/best01.jpg"} alt="1번 베스트 상품"/>




        <div className={styles.best_text}>
          <p>Meditating 바디로션 300ml</p>
          <p>#보습 #무향</p>
          <p>33,000원</p>
        </div>
     
      </SwiperSlide>

       <SwiperSlide onClick={() => {navigate('/body');window.scrollTo(0, 0); }}>
        <img src={process.env.PUBLIC_URL + "/img/best_slide/best02.jpg"} alt="2번 베스트 상품"/>
 
         <div className={styles.best_text}>
          <p>Tea bless 바디로션 300ml</p>
          <p>#수분 #향기</p>
         <p>29,800원</p>
        </div>

      </SwiperSlide>

      <SwiperSlide onClick={() => {navigate('/body');window.scrollTo(0, 0); }}>
         <img src={process.env.PUBLIC_URL + "/img/best_slide/best03.jpg"} alt="3번 베스트 상품"/>
  
         <div className={styles.best_text}>
          <p>Pansy 바디로션 300ml</p>
          <p>#보습 #무향 #유분</p>
          <p>32,000원</p>
        </div>


      </SwiperSlide>

       <SwiperSlide onClick={() => {navigate('/hand');window.scrollTo(0, 0); }}>
         <img src={process.env.PUBLIC_URL + "/img/best_slide/best04.jpg"} alt="4번 베스트 상품"/>
     
         <div className={styles.best_text}>
          <p>DIVEN 041 핸드크림 30ml</p>
          <p>#촉촉한 #향기 #수분</p>
          <p className={styles.best_price}>20,000원</p>
          <p>18,500원</p>
        </div>


      </SwiperSlide>

     <SwiperSlide onClick={() => {navigate('/body');window.scrollTo(0, 0); }}>
       <img src={process.env.PUBLIC_URL + "/img/best_slide/best05.jpg"} alt="5번 베스트 상품"/>

         <div className={styles.best_text}>
          <p>DIVEN 022 바디로션 210ml</p>
          <p>#보습 #저자극 #무향</p>
          <p>29,000원</p>
          <p></p>
        </div>


      </SwiperSlide>

     <SwiperSlide onClick={() => {navigate('/hand');window.scrollTo(0, 0); }}>
       <img src={process.env.PUBLIC_URL + "/img/best_slide/best06.jpg"} alt="6번 베스트 상품"/>
   
         <div className={styles.best_text}>
          <p>DIVEN 026 바디로션 150ml</p>
          <p>#수분 #촉촉한 #무향</p>
          <p className={styles.best_price}>32,000원</p>
          <p>21,000원</p>
        </div>


      </SwiperSlide>
  
    </Swiper>
    </div>
  );
};