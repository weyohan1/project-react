import React from 'react'
// import './Story.css';
import styled from 'styled-components';
import Footer from './Footer';



const StoryTitle = styled.div`
  width: 100%;
  color: white;
  background-color: #325336;
  text-align: center;
  position: relative;
  margin: 10px 0;
  padding: 20px 0;
`;

const StorySubTitle = styled.div`
position: absolute;
top: 10px;
right: 20px;
`;

const StoryMain = styled.div`
  width: 100%;
  position: relative;

`;
const StoryMainImg = styled.img`

  width: 100%;
  height: 300px;
  object-fit: cover;
`;
const StoryText = styled.div`
position: absolute;
text-decoration: underline;
top: 120px;
left: 690px;
color: white;
font-size: 50px;

`;


const StoryBox = styled.div`
div {
  width: 30%;
  height: 400px;
  color: #325336;
  text-align: center;
}
  background-color: #EFE6D8;
width: 100%;
height: auto;
display: flex;
color: black;
justify-content: center;
gap: 50px;

`;

const StoryBox01 = styled.div`

`;

const StoryBox01Img = styled.img`
  margin-top: 15px;
  object-fit: cover;
  width: 100%;
  height: 400px
`; 

const StoryBox02 = styled.div`
p:nth-child(1) {
  font-size: 26px;
  color: white;
  text-align: center;
  background-color: #325336;
}
  margin-top: 30px;
`;


export default function Story() {
  return (
    <div>

      <StoryTitle>
        <h1>스토리</h1>

      <StorySubTitle>
          <p>Story > 스토리</p>

      </StorySubTitle>

      </StoryTitle>

            <StoryMain>
                <StoryMainImg src={process.env.PUBLIC_URL +'/img/story/story01.png'} alt='스토리 메인 이미지'></StoryMainImg>
              <StoryText>
                <p>"Weroh Brand"</p>
              </StoryText>

            </StoryMain>


            <StoryBox>

              <StoryBox01>
                  <StoryBox01Img src={process.env.PUBLIC_URL +'/img/story/story02.png'} alt='스토리 이미지01'></StoryBox01Img>

              </StoryBox01>

              <StoryBox02>
                  <p>Harmony With Nature</p>
                <p>자연과의 조화를 추구하며, 피부에 담백하고 순수한 아름다움을 선사합니다.</p>
                <p>자연은 우리의 최고의 스승이자 영감의 원천입니다.</p>
                <p>우리는 그 신비로움과 조화를 당신의 피부 관리에 담아내어, 자연스러운 아름다움을 극대화하고자 합니다.</p>
                <p>우리의 제품은 고급 허브와 자연의 풍부한 선물들로 만들어졌습니다. </p>
                <p>그 속에는 자연의 숨결이 담겨 있어, 피부에 자연 그대로의 힘과 생기를 전해줍니다.</p>
                <p>또한, 환경을 소중히 여기며 친환경적인 제품을 만들어내고자 끊임없이 노력하고 있습니다.</p>
              

              </StoryBox02>


            </StoryBox>


              <StoryBox>

                <StoryBox02>
                      <p>Harmony The Power of Nature Nature</p>
               
                <p>환경과 피부 모두를 생각하는 DIVINE은  최고급 허브, 귀중한 오일, 그리고 식물의 힘을 통합하여 자연과의 완벽한 조화를 담아내는 스킨케어 제품을 자랑합니다.</p>
             
                <p>우리는 차별화된 효과를 위해 엄선된 원료를 사용합니다. 예를 들어, 유기농 라벤더 오일은 피부를 진정시키고 수분을 공급하여 건강한 피부를 유지하도록 도와줍니다. </p>

                <p>또한, DIVINE은 동물 실험을 하지 않으며, 동물성 성분을 사용하지 않습니다. 우리는 피부에 부담 없이 안심하고 사용할 수 있는 제품을 제공합니다. </p>
              
                <p>당신의 피부를 자연의 품에 안겨 빛나게 하기 위해, 우리의 제품을 경험해보세요.</p>
             

                </StoryBox02>
                <StoryBox01>
               <StoryBox01Img src={process.env.PUBLIC_URL +'/img/story/story03.png'} alt='스토리 이미지02'></StoryBox01Img>
                </StoryBox01>
              </StoryBox>
              <Footer/>





      </div>
      
  
  )
}
