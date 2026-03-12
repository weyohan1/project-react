// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes,Link} from 'react-router-dom';
// import { Container, Nav , Navbar,Row, Col } from 'react-bootstrap';


// import { useState} from 'react';
// import { useDispatch } from 'react-redux';
// import { addItem } from './Component/Store';
import BodyData from './Component/BodyData';
import BodyDetails from './Component/BodyDetails';

import HandData from './Component/HandData';
import HandDetails from './Component/HandDetails';

import ReviewData from './Component/ReviewData';
import ReviewDetails from './Component/ReviewDetails';

import Home from './Component/Home';
import Body from './Component/Body';
import Hand from './Component/Hand';
import Story from './Component/Story';
import Review from './Component/Review';
import Cart from './Component/Cart';
import Login from './Component/Login';
// import Footer from './Component/Footer';





function App() {



  return (
<>
<div className="marquee">
  <span>회원 가입시 "5,000원" 할인 쿠폰 증정!</span>
</div>



    <div className="App">

<header className='header'>

  <nav className='gnb'>
<ul className='gnb01'>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/body'>Body</Link></li>
  <li><Link to='/hand'>Hand</Link></li>
  <li><Link to='/story'>Story</Link></li>
  <li><Link to='/review'>Review</Link></li>

</ul>

<ul className='gnb02'>
  <li><Link to='/'>Weroh</Link></li>
</ul>

<ul className='gnb03'>
 <li><Link to ='/login'>Login</Link></li> 
 <li><Link to ='/cart'>Cart</Link></li> 
</ul>
  </nav>
</header>



      
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/body' element={<Body/>}/>
    <Route path='/hand' element={<Hand/>}/>
    <Route path='/story' element={<Story/>}/>
    <Route path='/review' element={<Review/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/BodyDetails/:id' element={<BodyDetails body={BodyData}/>}/>
    <Route path='/HandDetails/:id' element={<HandDetails hand={HandData}/>}/>
    <Route path='/ReviewDetails/:id' element={<ReviewDetails review={ReviewData}/>}/>

  </Routes>
    </div>
    </>
  );
}

export default App;
