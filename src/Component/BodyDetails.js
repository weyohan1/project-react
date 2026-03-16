import React from 'react'
import {useParams} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {addItem} from './Store';
import styled from 'styled-components'; 
import Footer from './Footer';



export default function Details({body}) {

  const{id} = useParams();
  const dispatch = useDispatch();
  const bodyItem = body.find(data => data.id ===id);


 const BodyDetailBox = styled.div`
   width: 100%;
   background-color: #EFE6D8; 
  color: #325336;
  text-align: center;
 
 `;
const BodyDetailTitle = styled.div`
  width: 100%;
  color: white;
  background-color: #325336;
  text-align: center;
  position: relative;
  margin: 10px 0;
  padding: 20px 0;
`;

const BodyDetailCard = styled.div`

`;

const BodyDetailBtn = styled.button`
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

  return (
    <div>

<BodyDetailBox>
<BodyDetailTitle>
  <h1>상세 페이지</h1>
</BodyDetailTitle>

<BodyDetailCard>

<img src={bodyItem.img} style={{width:'600px'}} alt= "상세페이지 이미지"/>
<h3>{bodyItem.title}</h3>
 <p>{bodyItem.desc}</p>
 <p>{bodyItem.price}</p>
 
 <BodyDetailBtn onClick={()=> {dispatch(addItem({id:bodyItem.id,title:bodyItem.title,count:1,price: bodyItem.price,}))}}>장바구니</BodyDetailBtn>

</BodyDetailCard>

</BodyDetailBox>
          
<Footer/>

    </div>
  )

}