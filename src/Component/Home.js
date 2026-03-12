import React from 'react'

import { Link } from 'react-router-dom';
import MainSlide from './MainSlide'
import SaleSlide from './SaleSlide';
import BestSlide from './BestSlide';
import '../App.css';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import {addItem} from './Store';

import BodyData from './BodyData';
// import Body from './Body';
// import Hand from './Hand';
// import './Body.css';
import HandData from './HandData';
// import './Hand.css';

// import './Review.css';
import Footer from './Footer';
// import ReviewData from './ReviewData';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import data from './Component/data';
// import { Swiper } from 'swiper/types';

import styled from 'styled-components';


export default function Home() {
  
  // const navigate = useNavigate();
  const [showReview, setShowReview] = useState(null);

  const [body] = useState(BodyData);
  const [hand] = useState(HandData);
  // const [review] = useState(ReviewData);


  const dispatch = useDispatch();



  
 /***메인 이미지 슬라이드***/


  const HomeMainBox = styled.div`
    width: 100%;
  margin-top: 10px;
  height: auto;
  background: #EFE6D8;
   object-fit: cover;
  `;


 /***중단 박스***/


 const HomeMiddleBox = styled.div`
   display: flex;
  gap: 10px;
  margin-top: 5px;
  position: relative;
  font-size: 24px;

  div {
    width: 50%;
  }
 `;
 const HomeMain01Img =styled.img`
   width: 100%;
  height: 400px;
  display: block;
 `;

 const HomeMain02Img =styled.img`
   width: 100%;
  height: 400px;
  display: block;
 `;
 
  const HomeBoxText01 = styled.div`
  p:nth-child(1) {
    font-size: 50px;
  margin-bottom: 10px;
  }

  position:absolute;
top: 120px;
color: white;
text-align: center;`;
  const HomeBoxText02 = styled.div`
  p:nth-child(1) {
    font-size: 50px;
  margin-bottom: 10px;
  }
  position:absolute;
top: 120px;
color: white;
text-align: center;`;

 const HomeImgBox01 =styled.div`
 
 `;
  const HomeImgBox02 =styled.div`
 
 `;




 /***세일 스나이퍼 슬라이드***/

 const SaleBox = styled.div`
 width: 100%;
  margin-top: 10px;
 `;

 const SaleBox01  = styled.div`
   width: 100%;
  height: 320px;
  background: #2F4A1E;
  margin-top: 10px;
  color: white;
  text-align: center;
  align-items: center;
  margin-bottom: 10px;

  p:nth-child(1) {
   font-size: 100px;

  }
     p:nth-child(2) {
  font-size: 50px;
  color: #EFE6D8;

  }

 P:nth-child(3) {
  font-size: 30px;
  margin-top: 20px;
  }
 `;

 const SaleBox02  = styled.div`
 `;


 /***베스트 스나이퍼 슬라이드***/

const BestItem = styled.div`

`;

const BestTitle = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  background-color: #325336;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const BestBox = styled.div`
`;




/***스토리***/

const StoryBox = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  position: relative;
  display: flex;
`;

const StoryImg = styled.img`
  width: 100%;
  object-fit:cover;
  height: 300px;
`;


const StoryBrand = styled.div`
  position:absolute;
  top: 70px;
  left: 100px;
  text-align: center;
  color: white;
  font-size: 50px;

  p {
   margin-bottom: 20px;
  }
`;

const StoryText = styled.div`
  position: absolute;
  top: 60px;
  left: 980px;
  text-align: left;
  color: white;
  font-size: 24px;

  p {
    margin-bottom: 10px;
  }

`;


/***All 박스***/

const HomeAllItem = styled.div`

`;

const HomeAllTitle = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  background-color: #325336;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;

/**바디 로션**/

const HomeBodyItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px;
  text-align: center;
  background-color: #EFE6D8;

p {
  margin-bottom: 0;
}

a {
 color: #325336;
}

`;
const HomeItemCard = styled.div` 
 color: #325336;
`;

const HomeBodyItemImg = styled.img`
transition: transform 0.4s ease;
  width: 100%;
  height: 500px;
  object-fit: cover;

&:hover {
 transform: scale(0.9);
}
`;

const HomeBodyBtn = styled.button`
  margin-top: 20px;
  margin-bottom: 10px;
    width: 100px;
  height: 50px;
  font-weight: 600;
  border: 3px solid #325336;
  background-color: white;
  color: #325336;

  &:hover {
    background-color: #325336;
  color: white;
  }
`;



/**핸드크림**/


const HomeHandItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px;
  text-align: center;
  background-color: #EFE6D8;

p {
  margin-bottom: 0;
}

a {
 color: #325336;
}

`;


const HomeHandItemImg = styled.img`
transition: transform 0.4s ease;
  width: 100%;
  height: 500px;
  object-fit: cover;

&:hover {
 transform: scale(0.9);
}
`;

const HomeHandBtn = styled.button`
  margin-top: 20px;
  margin-bottom: 10px;
    width: 100px;
  height: 50px;
  font-weight: 600;
  border: 3px solid #325336;
  background-color: white;
  color: #325336;

  &:hover {
    background-color: #325336;
  color: white;
  }
`;


const HomeAllReviewBtn = styled(Link)`
  width: 100px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #325336;
  background-color: white;
  border: 3px solid #325336;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  display: block;
   margin-top: 30px;
   margin-bottom: 30px;

   &:hover {
   background: #325336;
color: white;
cursor: pointer;
   }
`;


/***인스타 그램***/

const InstarGramBox = styled.div`
  width: 100%;
`;

const InstarGramTitle = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  background-color: #325336;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;


const InstarGramPicture = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px;
`;

const InstarGramImg = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  transition: transform 0.4s ease;

  &:hover {
   transform: scale(0.9);
  }
   
`;

const InstarGramLink = styled.a`
  display: block;
`;





/*** 리뷰 박스***/
    const HomeReviewBox = styled.div`
    width: 100%;
    `;

    const HomeReviewTitle = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  background-color: #325336;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
    `;

    const HomeReviewShow = styled.div`
      display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap:10px
    `;

    const HomeReviewItem = styled.div`
      position: relative;
  width: 100%;
  height: 400px;
   overflow: hidden; 
    `;



 const HomeReviewHoverImg = styled.img`
   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${HomeReviewItem}:hover & {
    opacity: 1;
  
  }
 
 `;

    const HomeReviewImg = styled.img`
      width: 100%;
  height: 400px;
  cursor: pointer;


    `;


const HomeReviewTextBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  z-index:10;
`;


const HomeReviewBtn = styled.div`
  margin-top: 10px;
  width: 100px;
  height: 30px;
  border: 3px solid #325336;
  cursor: pointer;
  background-color: white;
  color: #325336;
  font-size: 16px;

  &:hover {
  background: #325336;
color: white;
border: none;
  }
`;
  return (


    



 /***리뷰 박스***/   


<div>
   {/* 메인 이미지 슬라이드 */}

<HomeMainBox>
  
 <MainSlide />
</HomeMainBox>




 {/* 중단 박스  */}

<HomeMiddleBox>

  <HomeImgBox01>

    <HomeMain01Img src={process.env.PUBLIC_URL + '/img/main_box02/hb.png'} alt='바디핸드크림 사진' />
   <HomeBoxText01>
<p>Body & Hand</p>
  <p>#촉촉한 바디로션</p>
  <p>#부드러운 핸드크림</p>
 <Link to="/body"className='view_btn'  onClick={() => window.scrollTo(0,0)}>+ VIEW</Link>

   </HomeBoxText01>
  </HomeImgBox01>



  <HomeImgBox02>
    
      <HomeMain02Img src={process.env.PUBLIC_URL + '/img/main_box02/set.png'} alt='선물세트 사진' />
  <HomeBoxText02>
    <p>선물용 세트</p>
  <p>#부모님</p>
  <p>#친구</p>
   <Link to='/body' className='view_btn'  onClick={() => window.scrollTo(0,0)}>+ VIEW</Link>
  </HomeBoxText02>
  </HomeImgBox02>



</HomeMiddleBox>


<SaleBox>
<SaleBox01>
    <p>RENEWAL SALE!</p>
    <p>New Year Renewal</p>
    <p>Weroh up to 20% Discount</p>
</SaleBox01>

<SaleBox02>

  <SaleSlide />

</SaleBox02>
</SaleBox>




<BestItem>
  <BestTitle>
    <p>Best Item</p>
  </BestTitle>

  <BestBox>
    <BestSlide />
  </BestBox>
</BestItem>

<StoryBox>
  <StoryImg src={`${process.env.PUBLIC_URL}/img/story/story.jpg`} alt='스토리 이미지' />
 
<StoryBrand>
  <p>Weroh</p>
  <p>STORY</p>

</StoryBrand>

<StoryText>
   <p>Weroh는 자연의 품종에서 영감을 받아 탄생한 브랜드로, 더 나은 세상을 꿈꾸고자 합니다.</p>

<p>우리의 스킨케어 제품은 자연 속에서 찾은 숨겨진 보물들로 만들어져 피부에 자연스럽게 녹아들어 영양을 전달합니다.</p>
</StoryText>

</StoryBox>



<HomeAllItem>

<HomeAllTitle>
<p>ALL Item</p>
</HomeAllTitle>



<HomeBodyItemList>
   {body.slice(0,3).map((body,index) => (

     <HomeItemCard>
  <Link to={`/BodyDetails/${body.id}`}>
      <HomeBodyItemImg src={body.img} alt={body.title} />
      <h3>{body.title}</h3>
      <p>{body.desc}</p>
      <p>{body.price.toLocaleString()}원</p>
      </Link>

       <HomeBodyBtn onClick ={()=> {dispatch(addItem({id:body.id, title:body.title,price:body.price,count: 1}))}}>장바구니</HomeBodyBtn>
</HomeItemCard>
       ))}


       </HomeBodyItemList>


<HomeHandItemList>
   {hand.slice(0,3).map((hand,index) => (

     <HomeItemCard>
  <Link to={`/HandDetails/${hand.id}`}>
      <HomeHandItemImg src={hand.img} alt={hand.title} />
      <h3>{hand.title}</h3>
      <p>{hand.desc}</p>
      <p>{hand.price.toLocaleString()}원</p>
      </Link>

       <HomeHandBtn onClick ={()=> {dispatch(addItem({id:hand.id, title:hand.title,price: hand.price, count: 1}))}}>장바구니</HomeHandBtn>
</HomeItemCard>
       ))}


       </HomeHandItemList>

<HomeAllReviewBtn to='/body' onClick={() => window.scrollTo(0,0)}>
+ VIEW 
</HomeAllReviewBtn>

</HomeAllItem>


<InstarGramBox>

  <InstarGramTitle>
<p>INSTAGRAM</p>

  </InstarGramTitle>

<InstarGramPicture>

  <InstarGramLink>
    
 <a href='https://www.instagram.com/oosc_korea/p/DUPtohlEtBM/?img_index=3' target='_blank' rel='noopener noreferrer'>
 <InstarGramImg src={`${process.env.PUBLIC_URL}/img/instagram/01.JPG`} alt='인스타 1번 사진' /></a>
  </InstarGramLink>

    <InstarGramLink>
 <a href='https://www.instagram.com/oosc_korea/p/DUPtohlEtBM/?img_index=3' target='_blank' rel='noopener noreferrer'>
 <InstarGramImg src={`${process.env.PUBLIC_URL}/img/instagram/02.JPG`} alt='인스타 2번 사진' /></a>
</InstarGramLink>
   <InstarGramLink>
 <a href='https://www.instagram.com/oosc_korea/p/DUPtohlEtBM/?img_index=3' target='_blank' rel='noopener noreferrer'>
 <InstarGramImg src={`${process.env.PUBLIC_URL}/img/instagram/03.JPG`} alt='인스타 3번 사진' /></a>
</InstarGramLink>

   <InstarGramLink>
 <a href='https://www.instagram.com/oosc_korea/p/DUPtohlEtBM/?img_index=3' target='_blank' rel='noopener noreferrer'>
 <InstarGramImg src={`${process.env.PUBLIC_URL}/img/instagram/04.JPG`} alt='인스타 4번 사진' /></a>
</InstarGramLink>

   <InstarGramLink>
 <a href='https://www.instagram.com/oosc_korea/p/DUPtohlEtBM/?img_index=3' target='_blank' rel='noopener noreferrer'>
<InstarGramImg src={`${process.env.PUBLIC_URL}/img/instagram/05.JPG`} alt='인스타 5번 사진' /></a>
</InstarGramLink>

   <InstarGramLink>
 <a href='https://www.instagram.com/oosc_korea/p/DUPtohlEtBM/?img_index=3' target='_blank' rel='noopener noreferrer'>
<InstarGramImg src={`${process.env.PUBLIC_URL}/img/instagram/06.png`} alt='인스타 6번 사진' /></a>
</InstarGramLink>

   <InstarGramLink>
 <a href='https://www.instagram.com/oosc_korea/p/DUPtohlEtBM/?img_index=3' target='_blank' rel='noopener noreferrer'>
<InstarGramImg src={`${process.env.PUBLIC_URL}/img/instagram/07.jpg`} alt='인스타 7번 사진' /></a>
</InstarGramLink>

   <InstarGramLink>
 <a href='https://www.instagram.com/oosc_korea/p/DUPtohlEtBM/?img_index=3' target='_blank' rel='noopener noreferrer'>
<InstarGramImg src={`${process.env.PUBLIC_URL}/img/instagram/08.jpg`} alt='인스타 8번 사진' /></a>
</InstarGramLink>

   <InstarGramLink>
 <a href='https://www.instagram.com/oosc_korea/p/DUPtohlEtBM/?img_index=3' target='_blank' rel='noopener noreferrer'>
<InstarGramImg src={`${process.env.PUBLIC_URL}/img/instagram/09.jpg`} alt='인스타 9번 사진' /></a>
</InstarGramLink>

</InstarGramPicture>


</InstarGramBox>


  <HomeReviewBox>

    <HomeReviewTitle>
      <p>REVIEW</p>
    </HomeReviewTitle>

 <HomeReviewShow>

<HomeReviewItem>
      <HomeReviewHoverImg src={process.env.PUBLIC_URL + '/img/review/02.JPG'} alt='호버' />
    <HomeReviewImg src={process.env.PUBLIC_URL + "/img/review/01.JPG"}alt='1' onClick={() => setShowReview(1)} />
     {showReview === 1 && (
<HomeReviewTextBox>
        <p>자극적이지 않아 좋아요! 주변 지인들이 따라살 정도로 효과를 보고 있는 제품입니다.</p>
        <HomeReviewBtn onClick={() => setShowReview(null)}>닫기</HomeReviewBtn>

</HomeReviewTextBox>

 )}
</HomeReviewItem>



<HomeReviewItem>
       <HomeReviewHoverImg src={process.env.PUBLIC_URL + '/img/review/04.jpg'} alt='호버' />
    <HomeReviewImg src={process.env.PUBLIC_URL +"/img/review/03.JPG"}alt='2' onClick={() => setShowReview(2)} />
     {showReview === 2 && (
<HomeReviewTextBox>
         <p>리뉴얼 되고 더 좋아진 느낌 입니다. 좋아요!</p>
        <HomeReviewBtn onClick={() => setShowReview(null)}>닫기</HomeReviewBtn>

</HomeReviewTextBox>

 )}
</HomeReviewItem>



<HomeReviewItem>
       <HomeReviewHoverImg src={process.env.PUBLIC_URL +'/img/review/06.jpg'} alt='호버' />
    <HomeReviewImg src={process.env.PUBLIC_URL + "/img/review/05.JPG"} alt='3' onClick={() => setShowReview(3)} />
     {showReview === 3 && (
<HomeReviewTextBox>
         <p>성분이 순해서 피부에 자극이 덜해요. 만족합니다!</p>
        <HomeReviewBtn onClick={() => setShowReview(null)}>닫기</HomeReviewBtn>

</HomeReviewTextBox>

 )}
</HomeReviewItem>


<HomeReviewItem>
       <HomeReviewHoverImg src={process.env.PUBLIC_URL + '/img/review/08.jpg'} alt='호버' />
    <HomeReviewImg src={process.env.PUBLIC_URL + "/img/review/07.JPG"}alt='4' onClick={() => setShowReview(4)} />
     {showReview === 4 && (
<HomeReviewTextBox>
         <p>벌써 세번째 구매네요! 역시 믿고 구매합니다. 매번 잘 쓰고있어요.</p>
        <HomeReviewBtn onClick={() => setShowReview(null)}>닫기</HomeReviewBtn>

</HomeReviewTextBox>

 )}
</HomeReviewItem>

 </HomeReviewShow>
  </HomeReviewBox>

<Footer/>

</div>


  );
} 