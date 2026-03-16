import React from 'react'
import Footer from './Footer';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import {useDispatch, useSelector} from 'react-redux';
import { addCount, subCount,deleteItem } from './Store'


export default function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();


  const totalPrice = state.cart.reduce((acc, item) => {
  return acc + item.price * item.count;
}, 0);


const CartTitle = styled.div`
  background-color: #325336;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;
const CartTable = styled(Table)`
  margin-top: 10px;

th {
  color: #325336;
}

td{
 background-color: #EFE6D8;
  color: #325336;
}
`;

const CartBtn = styled.button`
  color: #325336;
  font-weight: 600;
  width: 50px;
`;
 const CartTotalBox =styled.div`
  color: white;
  text-align:right;
  background-color: #325336;
 `;

 const CartPayBtn = styled.button`
  width: 100px;
  height: 50px;
  background: white;
  color: #325336;
  border: 3px solid #325336;
  font-weight: 600;
  cursor: pointer;
  display:block;
  margin: 0 auto;

 `;
  return (
    <div >

      <CartTitle>
         <h1>{state.user.name}님의 장바구니</h1>
      </CartTitle>

      <CartTable striped bordered hover>

         <thead>
        <tr>
          <th>코드</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
          <th>금액</th>
        </tr>
      </thead>
      <tbody>
     {
      state.cart.map((item)=>{
        return (

             <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.count}</td>
          <td>
            <CartBtn onClick={()=> dispatch(addCount(item.id))}>+</CartBtn>
            <CartBtn onClick={()=> dispatch(subCount(item.id))}>-</CartBtn>
            <CartBtn onClick={()=>dispatch(deleteItem(item.id))}>삭제</CartBtn>
          </td>
      
          <td>{(item.price * item.count).toLocaleString()}원</td>
        </tr>
        )
      })
     }
      </tbody>

      </CartTable>
      <CartTotalBox>
          <h3>총 합계: {totalPrice.toLocaleString()}원</h3>
      </CartTotalBox>

      <CartPayBtn onClick={() => {
    if (state.cart.length === 0) {
      alert("장바구니가 비어 있습니다.");
      return;
    }
    alert(`총 ${totalPrice.toLocaleString()}원 결제`); }}>결제하기</CartPayBtn>

  
<Footer/>
    </div>
  )
}
