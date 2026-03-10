// import React from 'react'
// // import data from './Data'
// import HandData from './HandData'
// import './Hand.css';

// import {Link} from 'react-router-dom';
// import { useDispatch} from 'react-redux';
// import {addItem} from './Store';
// import { useState} from 'react';
// import Footer from './Footer';



// export default function Hand() {


// const [hand] = useState(HandData);
// const dispatch = useDispatch();


//   return (
//     <div>
//       <div className='hand_title'>
//         <h1>핸드 크림</h1>
//            <div className='breadcrumb'>
//       <p>Hand > 핸드 크림</p>
//       </div>
//       </div>
      
// <div className="hand_item_list">
//   {hand.map((hand,index) => (
//     <div className="hand_item_card" key={hand.id}>
//           <Link to={`/HandDetails/${hand.id}`}>
//       <img src={hand.img} alt={hand.title} />
//       <h3>{hand.title}</h3>
//       <p>{hand.desc}</p>
//       <p>{hand.price.toLocaleString()}원</p>
//           </Link>

      
//        <button onClick ={()=> {dispatch(addItem({id:hand.id, title:hand.title,count: 1}))}}>장바구니</button>    
//     </div>
//   ))}
// </div>




// <Footer/>



//     </div>
//   )
// }



// // import React, { Component } from 'react'
// // import BodyDetails from './BodyDetails';
// // import Cart from './Cart';
// import BodyData from './BodyData';
// import './Body.css';
// import Footer from './Footer';

// import {Link} from 'react-router-dom';
// import { useDispatch} from 'react-redux';
// import {addItem} from './Store';
// import { useState} from 'react';

// export default function Body() {

// const [body] = useState(BodyData);
// const dispatch = useDispatch();


//   return (
//     <div>
//       <div className='body_title'>
        
//       <h1>바디 로션</h1>
//       <div className='breadcrumb'>
//       <p>Body > 바디 로션</p>
//       </div>

//       </div>
     

// <div className="body_item_list">
//   {body.map((body,index) => (
//     <div className="body_item_card" key={body.id}>
//       <Link to={`/BodyDetails/${body.id}`}>
//       <img src={body.img} alt={body.title} />
//       <h3>{body.title}</h3>
//       <p>{body.desc}</p>
//       <p>{body.price.toLocaleString()}원</p>
//       </Link>

//        <button onClick ={()=> {dispatch(addItem({id:body.id, title:body.title,count: 1}))}}>장바구니</button>
//     </div>
//   ))}
// </div>



// <Footer/>
//     </div>
//   )
// }




import React, { useState } from 'react';
import styled from 'styled-components'; 
import HandData from './HandData';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './Store';


// ㅡㅡㅡㅡㅡㅡㅡ    ㅡㅡㅡ추가 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
 

const Title = styled.div`
  width: 100%;
  color: white;
  background-color: #325336;
  text-align: center;
  position: relative;
  margin: 10px 0;
  padding: 20px 0;
`;
const SubTitle= styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
`;

const ItemBox = styled.div` 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  text-align: center;
    overflow: hidden;
  background-color: #EFE6D8;
p {
   margin-bottom: 0;
}
a {
 color: #325336;
}

`;


const ItemCard = styled.div`
  color: #325336;
  text-align: center;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    transition: 0.4s;
    &:hover { transform: scale(0.9); }
  }
`;

const HandImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`; 

const CartBtn = styled.button`
  width: 100px;
  height: 50px;
  background: white;
  color: #325336;
  border: 3px solid #325336;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: #325336; color: white; }
`;






export default function Hand() {
  const [hand] = useState(HandData);
  const dispatch = useDispatch();

  return (
    <div>








      <Title>
        <h1>핸드 크림</h1>
                <SubTitle>
          <p>hand > 핸드 크림</p>
        </SubTitle>
      </Title>

      <ItemBox>
        {hand.map((item) => (
          <ItemCard key={item.id}>





            <Link to={`/HandDetails/${item.id}`}>
              <HandImg src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p>{item.price.toLocaleString()}원</p>
            </Link>
            






           
            <CartBtn onClick={() => dispatch(addItem({ id: item.id, title: item.title, price: item.price, count: 1 }))}>
              장바구니
            </CartBtn>
          </ItemCard>

        ))}
      </ItemBox>










      <Footer />
    </div>
  );
}