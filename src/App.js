import './App.css';
import { Route, Routes } from 'react-router';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerImage from './banner/banner.jpg'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import PrivateRoute from './Route/PrivateRoute';
import Cart from './page/Cart';
import SuggestionCoffee from './page/SuggestionCoffee';
import BestAll from './page/BestAll';
import ColdBrowAll from './page/ColdBrow';
import GiftSet from './page/GifSet';
import FruitAgency from './page/FruitAgency';
import ReviewsList from './component/ReviewList';
import './component/tab.css'







function App() {
  let navigate=useNavigate()
  const [authenticate,setAuthenticate]=useState(false);
  useEffect(()=>{
    console.log("aaaa",authenticate)
    navigate('/')
},[authenticate])
  return (
    <div>
      <Navbar/>
      <img src={BannerImage} alt='banner'/>
     <Routes>
        <Route path='/'  element={<ProductAll/>} />
        <Route path='/login'  element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path='/product/:id'  element={<PrivateRoute authenticate={authenticate}/>} />
        <Route path='/porduct/suggestion'  element={<SuggestionCoffee/>} />
        <Route path='/porduct/bestcoffee'  element={<BestAll/>} />
        <Route path='/product/coldbrow'  element={<ColdBrowAll/>} />
        <Route path='/product/giftset'  element={<GiftSet/>} /> 
        <Route path='/product/fruit'  element={<FruitAgency/>} /> 
        <Route path='/review'  element={<ReviewsList/>} /> 
        <Route path='/Cart'  element={<Cart/>} /> 
     </Routes>
    </div>
  );
}

export default App;

