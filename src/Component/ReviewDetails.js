import React from 'react'


import {useParams} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {addItem} from './Store';
// import './Review.css';
import Footer from './Footer';
import styled from 'styled-components';

export default function Details({review}) {

 
  const{id} = useParams();
  const dispatch = useDispatch();
  const reviewItem = review.find(data => data.id ===id);

  const ReviewDetail = styled.div`
    width: 100%;
  color: #325336;
  text-align: center;
  background-color: #EFE6D8;

  `;

  const ReviewDetailTitle = styled.div`
    width: 100%;
  color: white;
  height: 96px;
    padding-top: 20px;
  background-color: #325336;
  margin-top: 10px;
  margin-bottom: 10px;
  


  `;
 
  const ReviewDetailBox = styled.div`
   display: flex;
  width: 100%;
  gap: 10px;

  div {
    width: 50%;
  }
  `;

  const ReviewBox01 = styled.div`
   p {
     margin-bottom: 0;
   }
  `;

  const ReviewBox02 = styled.div`
  margin-right: 10px;
  font-size: 30px;
  padding-top: 100px;

  p {
    margin-bottom: 40px;
  }
    h1 {
      margin-bottom: 30px;
    }
  `;

  const ReviewDetailImg = styled.img `
  
  `;

  const ReviewDetailBtn = styled.button`
    margin-top: 20px;
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

  return (


    <div>
      <ReviewDetail>

        <ReviewDetailTitle>
           <h1>리뷰 페이지</h1>
        </ReviewDetailTitle>

        <ReviewDetailBox>


        <ReviewBox01>
            
                <ReviewDetailImg src={reviewItem.img} style={{width:'600px'}} alt="리뷰 이미지"/>

                <h3>{reviewItem.title}</h3>
                    <p>{reviewItem.desc}</p>
                    <p>{reviewItem.user}</p>
                    <p>{reviewItem.price.toLocaleString()}원</p>
                     <ReviewDetailBtn onClick={()=> {dispatch(addItem({id:reviewItem.id,title:reviewItem.title,count:1,price: reviewItem.price,}))}}>장바구니</ReviewDetailBtn>


        </ReviewBox01>

        <ReviewBox02>
           <h1>{reviewItem.title}</h1>
            <p>{reviewItem.desc}</p>
            <p>{reviewItem.user}</p>
            <p>{reviewItem.text}</p>
            <p>{reviewItem.time}</p>
          

        </ReviewBox02>

</ReviewDetailBox>


      </ReviewDetail>



<Footer/>




    </div>
  )

}





















// export default function Details() {
//   return (
//     <div>
      
//     </div>
//   )
// }
