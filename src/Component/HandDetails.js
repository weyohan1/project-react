import React from 'react'
import {useParams} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {addItem} from './Store';
import styled from 'styled-components';
import Footer from './Footer';


export default function Details({hand}) {


  const{id} = useParams();
  const dispatch = useDispatch();
  const handItem = hand.find(data => data.id ===id);


  const HandDetailBox = styled.div`
     width: 100%;
   background-color: #EFE6D8; 
  color: #325336;
  text-align: center;
  
  `;
 const HandDetailTitle = styled.div`
  width: 100%;
  color: white;
  background-color: #325336;
  text-align: center;
  position: relative;
  margin: 10px 0;
  padding: 20px 0;
 `;

 const HandDetailCard = styled.div`
 
 `;

 const HandDetailBtn = styled.button`
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
   

<HandDetailBox>

  <HandDetailTitle>
    <h1>상세 페이지</h1>
  </HandDetailTitle>

<HandDetailCard>
  <img src={handItem.img} style={{width:'600px'}} alt= "상세페이지 이미지"/>
  <h3>{handItem.title}</h3>
 <p>{handItem.desc}</p>
 <p>{handItem.price}</p>

 <HandDetailBtn onClick={()=> {dispatch(addItem({id:handItem.id,title:handItem.title,count:1,price: handItem.price,}))}}>장바구니</HandDetailBtn>

</HandDetailCard>

</HandDetailBox>

<Footer/>

    </div>
  )
}
