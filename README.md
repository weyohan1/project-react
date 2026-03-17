
## 📌 프로젝트 Body & Hand 웹사이트

![01](https://github.com/user-attachments/assets/b2347b53-d12d-416a-8575-02d3226092ec)

📎 사이트 링크 : https://weyohan1.github.io/project-react/

<br>


▷ 개인 포트폴리오 입니다.

▷ 정보의 과잉으로 인해 브랜드의 핵심 가치가 희석된 기존 바디케어 웹사이트를 개선하기 위해 기획하게 되었습니다.

▷ 브랜드 아이덴티티를 보여줄 수 있는 선택과 집중 전략을 취했습니다, 불필요한 제품을 덜어내고 바디로션과 핸드크림 주력 라인업에 집중하여, 재구성하였습니다.



<br>

## 📌 프로젝트 정보

- 개발 기간 : 2026.01 ~ 2026.02     
- 개발 인원 : 1명

<br>

### ✅시안 및 구성 

- 기획

<img src = "https://github.com/user-attachments/assets/9c494189-7527-4667-8485-7b2a35431f00" width = "300px"/>
<img src = "https://github.com/user-attachments/assets/0e80ecf8-00d7-471b-b9ac-bb1720d8cab7" width = "300px"/>
<br>
<img src = "https://github.com/user-attachments/assets/4f750bf9-53a4-4f4a-8616-fc72129f6864" width = "200px"/>
<img src = "https://github.com/user-attachments/assets/0594ee90-283a-4cc3-ac59-19648142e340" width = "200px"/>
<img src = "https://github.com/user-attachments/assets/f87f2e9b-0554-4955-85e2-b1c36854adee" width = "200px"/>
<img src = "https://github.com/user-attachments/assets/94dfc08e-9b2f-4028-bf05-03a620821c27" width = "200px"/>





<br>


## 📌사용 스킬

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-%23DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)


<br>


## 📌 프로젝트 주요 기능

- 메인 슬라이드 및 배너
- 컴포넌트 기반 스타일링
- Hover 인터랙션 UI 구현



<br>


## 📌 프로젝트 구조
```
project
 ├ Data.js
 │   
 ├ Body.js          
 ├ BodyData.js     
 ├ BodyDetails.js 
 │                 └ style.component 
 ├ Hand.js          
 ├ HandData.js     
 ├ HandDetails.js  
 │                 └ style.component 
 ├ MainSlide.js        
 │         └ MainSlide.module.css 
 ├ BestSlide.js
 │         └ BestSlide.module.css 
 ├ SaleSlide.js 
 │         └ SaleSlide.module.css   
 │
 ├ Home.js
 │   └ style.component 
 ├ Story.js
 │   └ style.component 
 ├ Review.js
 ├ ReviewData.js
 ├ ReviewDetail.js
 │   └ style.component 
 ├ Login.js
 │   └ Login.css
 ├ Cart.js
 │   └ style.component
 ├ Store.js
 │   
 ├ Footer.js
 │   └ style.component

```

 <br>

## 📌 코드 리뷰


## ✅ 메인 슬라이드 및 배너

### 메인 슬라이드

<img src = "https://github.com/user-attachments/assets/1b5aac4f-eb97-4c60-ac81-7d3bf77c8e96" width = "500px">
<img src = "https://github.com/user-attachments/assets/7d51bb01-f956-4898-a91c-25cf3724763e" width = "500px" height = "700px" >

- 메인 슬라이드에는 Swiper와 텍스트 애니메이션을 적용하여 슬라이드 전환 시 콘텐츠가 자연스럽게 등장하는 인터랙티브한 UI를 구현하였습니다.
- 슬라이드 내부 상품을 클릭하여 페이지 이동 시 스크롤 위치가 중간에서 시작되는 문제가 발생하여, window.scrollTo(0, 0)을 사용해 페이지 로드 시 최상단으로 초기화하도록 처리했습니다.

## ⭕ 메인 슬라이드 구현 결과

<br>

https://github.com/user-attachments/assets/f62e83d7-f844-40cb-850a-26fb28e78bad

<br>

### (세일) 배너 슬라이드

<img src = "https://github.com/user-attachments/assets/4e309bcb-4701-4fbe-bbfd-2afc35b94e2a" width = "500px">
<img src = "https://github.com/user-attachments/assets/b9ecef84-6b57-494a-8f67-06897bb34d30" width = "500px">

- (세일 배너) 슬라이드에는 마우스를 올리면 자동 화면 전환이 일시 정지되도록 구현하였으며, 상품에 호버 시 이미지가 확대되는 효과를 적용하였습니다.

<br>

## ⭕ (세일) 배너 슬라이드 구현 결과

<br>

https://github.com/user-attachments/assets/fe245cf0-add7-4d7b-9326-586ec441ceda

<br>

##  ✅ 컴포넌트 기반 스타일링

<img src = "https://github.com/user-attachments/assets/8173b3f6-8201-4b66-8892-b5abb687fd6c" width = "400px">
<img src = "https://github.com/user-attachments/assets/c3bcf2a4-01a3-44bf-aa34-dbef137cf1a4" width = "400px">

- 기존 CSS 파일 기반 스타일 관리 방식을 React 컴포넌트 단위의 styled-components 방식으로 변경하여 스타일 관리 효율성을 개선했습니다.

<br>

##  ✅ Hover 인터랙션 UI 구현

<img src = "https://github.com/user-attachments/assets/8d0af194-b32a-450c-a6d4-0e96a4922e03" >

- 상품 카드에 hover를 적용하여 마우스 호버 시 transform: scale(0.9)로 축소되는 UI 효과를 구현했습니다.

<br>

## ⭕ Hover 인터랙션 UI 구현 결과

https://github.com/user-attachments/assets/5a98f745-dd37-4dc7-b591-068df375cdb3

