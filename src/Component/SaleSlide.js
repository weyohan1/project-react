import React from 'react'


import {Navigation, Scrollbar, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';



import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import '../SaleSlide.css';
// import styles from '../SaleSlide.module.css';
import styles from '../SaleSlide.module.css';


export default function SaleSlide() {

const navigate = useNavigate(); 


  return (
    <div className={styles.sale_box}>

    
   <Swiper
   modules={[Navigation, Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      scrollbar= {{draggable: true}}
     autoplay={{delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
     loop={true}
    >
      <SwiperSlide onClick={() => {navigate('/body');window.scrollTo(0, 0); }}>
        <img src={process.env.PUBLIC_URL + "/img/sale_slide/sale01.jpg"} alt="1번 세일 상품" />

        <div className={styles.sale_text}>
          <p className={styles.sale_title}>WEROH&nbsp;SIGNATURE</p>
          <p className={styles.sale_product}>#Body&nbsp;Lotion</p>

          <p className={styles.sale_particular}>
           <span> DIVEN 026 바디로션 150ml</span>
           <span>#수분 #촉촉한 #무향</span>
            <span>32,000원</span>
            <span>21,000원</span>


            <span>글리세린, 히알루론산 등의 성분은 피부에 수분을 공급하여 건조함을 예방합니다.</span>
              <span>각질층의 보호막을 강화하고 피부를 부드럽게 만들어주는 성분으로, 세라마이드, 콜라겐 등이 있습니다.</span>
            <span>  비타민 C, E 등의 항산화 성분은 피부를 탄력 있게 유지하고 자외선으로부터 피부를 보호합니다</span>
          <span> RENEWAL</span>
            </p>

        </div>
     
      </SwiperSlide>

         <SwiperSlide onClick={() => {navigate('/body');window.scrollTo(0, 0); }}>
       <img src={process.env.PUBLIC_URL + "/img/sale_slide/sale02.jpg"} alt="2번 세일 상품" />
         <div className={styles.sale_text}>
          <p className={styles.sale_title}>WEROH&nbsp;SIGNATURE</p>
          <p className={styles.sale_product}>#Body&nbsp;Lotion</p>

          <p className={styles.sale_particular}>
           <span> Olive oil 바디로션 250ml</span>
           <span>#촉촉한 #무향</span>
            <span>29,000원</span>
            <span>23,900원</span>


            <span>15% 시어 버터가 함유되어 건조함을 완화하고 피부를 오랜 시간 촉촉하게 유지해줍니다.</span>
            <span>피부 장벽을 외부 자극으로부터 보호해 자연스러운 부드러움을 지켜줍니다.</span>
            <span>부드럽게 녹아드는 텍스처는 빠르게 흡수되어 끈적임 없이 피부를 매끄럽고 탄력 있게, 편안한 촉감으로 가꿔줍니다.</span>
           
         
          <span> RENEWAL </span>
            </p>

        </div>
      </SwiperSlide>

         <SwiperSlide onClick={() => {navigate('/hand');window.scrollTo(0, 0); }}>
        <img src={process.env.PUBLIC_URL + "/img/sale_slide/sale03.jpg"} alt="3번 세일 상품" />
         <div className={styles.sale_text}>
          <p className={styles.sale_title}>WEROH&nbsp;SIGNATURE</p>
          <p className={styles.sale_product}>#Hand&nbsp;Cream</p>

          <p className={styles.sale_particular}>
            <span> Hwawon 핸드크림 30ml</span>
            <span>#수분 #향기 #저자극</span>
            <span>29,000원</span>
            <span>19,900원</span>


            <span>20% 시어 버터를 함유해 손에 깊은 영양과 보습을 선사하며 피부 장벽을 강화해 줍니다.</span>
              <span>리치한 텍스처지만 빠르게 흡수되며, 건조한 손을 눈에 띄게 부드럽고 매끈하게 변화시켜 줍니다.</span>
         <br></br>
         <br></br>
          <span> RENEWAL</span>
            </p>

        </div>
      </SwiperSlide>

      <SwiperSlide onClick={() => {navigate('/hand');window.scrollTo(0, 0); }}>
        <img src={process.env.PUBLIC_URL + "/img/sale_slide/sale04.jpg"} alt="4번 세일 상품" />
         <div className={styles.sale_text}>
          <p className={styles.sale_title}>WEROH&nbsp;SIGNATURE</p>
          <p className={styles.sale_product}>#Hand&nbsp;Cream</p>

          <p className={styles.sale_particular}>
           <span> DIVEN 041 핸드크림 30ml</span>
           <span>#촉촉한 #향기 #수분</span>
            <span>20,000원</span>
            <span>18,500원</span>


            <span>Divine 핸드크림은 촉촉한 영양과 상쾌한 향기로 완벽한 핸드 케어를 선사합니다.</span>
              <span>건조한 계절, 항상 당신의 곁에 풍부한 보습을 선사하는 특별한 핸드크림으로 손을 감싸세요.</span>
             <br></br>
         <br></br>
          <span> RENEWAL</span>
            </p>

        </div>
      </SwiperSlide> 

    </Swiper>
    </div>
  );
};