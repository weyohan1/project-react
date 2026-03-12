// import React from 'react'
import ReviewData from './ReviewData';
// import './Review.css';
// import ReviewDetails from './ReviewDetails';



import {Link} from 'react-router-dom';
// import { useDispatch} from 'react-redux';
// import {addItem} from './Store';
import { useState} from 'react';
import Footer from './Footer';
import styled from 'styled-components';




export default function Review() {

const [review] = useState(ReviewData);
// const dispatch = useDispatch();


const ReviewTitle = styled.div`
  width: 100%;
  color: white;
  background-color: #325336;
  text-align: center;
  position: relative;
  margin: 10px 0;
  padding: 20px 0;

`;

const ReviewSub = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`;

const ReviewBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px;
  text-align: center;
  background-color: #EFE6D8;
  overflow: hidden;

  p {
    margin-bottom: 0;
  color: #325336;
  }
  h3 {
    color: #325336;
  }

`;

const ReviewCard = styled.div`
`;

const ReviewCardImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;

`;





  return (

<div>

    <ReviewTitle>
           <h1>리뷰</h1>

      <ReviewSub>
          <p>Review > 리뷰</p>
      </ReviewSub>

    </ReviewTitle>



       <ReviewBox>
         {review.map((review,index) => (
        <ReviewCard  key={review.id}>

               <Link to={`/ReviewDetails/${review.id}`}>
      <ReviewCardImg src={review.img} alt={review.title} />
      <h3>{review.title}</h3>
      <p>{review.desc}</p>
      <p>{review.user}님</p>
      
      </Link>

        </ReviewCard> 

         ))}
       </ReviewBox>



<Footer/>

    </div>
  )
}
