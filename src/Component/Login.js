import React from 'react'
import './Login.css';
import Footer from './Footer';


export default function Login() {
  return (


    <div>
      <div className='login_title'>
      <h1>로그인</h1>
      </div>

<div className='login_main'>

  <div className='login_logo'>
    <h1>Weroh</h1>
  </div>

<div className='login_box'>

  <form action='' name='login'>

    <div className='log_in'>
    <label><p>아이디</p></label>
    <input type="text" name="user_id" id="user_id" class="user_id" placeholder="아이디입력" required autofocus></input>

    <label><p>비밀번호</p></label>
    <input type="password" name="user_pw" id="user_pw" class="user_pw" placeholder="비밀번호입력" required></input>

     <div class="save_wrap">
     <input type="checkbox" id="chk_info"></input>
      <label><p> 아이디 저장</p></label>
      <button class="login_btn">로그인</button>
    </div>

    </div>
    
  </form>

<div class="find_menu">
<span class="find_text">아이디 찾기 | 비밀번호 찾기</span>
 <span class="find_text">회원가입</span>
</div>
</div>

</div>


<Footer/>
      
    </div>
  )
}


