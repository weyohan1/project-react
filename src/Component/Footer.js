import React from 'react'
// import './Footer.css';
import styled from 'styled-components';


const FooterLogo = styled.div`
  width: 100%;
  height: 300px;
  background-color: #2F4A1E;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
`;

const FooterText = styled.div`
p:nth-child(2) {
  font-size: 50px;
  padding-top: 30px;
   color: #EFE6D8;
}

  color: white;
  text-align: center;
  font-size: 100px;
`;


const FooterBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  gap: 100px;
  background-color: #EFE6D8;

p {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #325336;
  
  }
  
`;

const FooterTitle = styled.div`
 p:last-child {
   background-color: #2F4A1E;
  color: white;
  text-align: center;
 }
  width: 300px;
  height: auto;
  text-align: center;
  margin-top: 20px;
`;

const FooterHelp = styled.div`

p {
  text-align: left;
}
  width: 300px;
  height: auto;
  text-align: center;
  margin-top: 20px;
`;



export default function Footer() {
  return (

    <div>

      <FooterLogo>
        <FooterText>
          
          <p>Weroh</p>
        
          <p>Body Lotion & Hand Cream</p>
        </FooterText>


      </FooterLogo>


      <FooterBox>
        <FooterTitle>
  <p>CUSTOMER SERVICE</p>
  <p>051-777-7777</p>
  <p>AM 09:30 - PM06:00 (MON-FRI)</p>
  <p>LUNCH PM12:00 - 13:00</p>
  <p>Copyright &copy; Weroh ALL Right Reserved</p>
        </FooterTitle>

        <FooterHelp>
  <p>(주)레오레오</p>
  <p>OWNER : 레오아빠</p>
  <p>BUSINESS LICENSE : 777-77-77777</p>
  <p>ADDRESS : 부산광역시</p>  
  <p>E-MAIL : weroh@naver.com</p>


        </FooterHelp>


      </FooterBox>


    </div>
  )
};
