import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };

  const RecommendedBeans = () => {
    navigate("/porduct/suggestion");
  };
  const bestcoffee =()=>{
    navigate('/porduct/bestcoffee')
  }
  const coldbrowcoffee=()=>{
    navigate('/product/coldbrow')
  }
  const giftclick=()=>{
    navigate('/product/giftset')
  }
  const fruit=()=>{
    navigate('/product/fruit')
  }
  const review =()=>{
    navigate('/review')
  }
  const shoppingShow=()=>{
    navigate('/Cart')
  }


  const search =(event)=>{
    if(event.key === "Enter"){
      let keyword = event.target.value
      console.log("keyword",keyword)
      navigate(`/?q=${keyword}`)
    }
      
  }
  return (
    <div>
      <div>
        <div className="login-button" onClick={gotoLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
        <div className="shopping" onClick={shoppingShow}>
        <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </div>
      <div className="logo-section">
        <Link to={"/"}>
          <img src="https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/skin/front/mo_designart_1/img/banner/41868dbec59af093a08e31f9ee0e50ff_28963.png" />
        </Link>
      </div>
      <div className="menu-area">
        <ul className="menuList">
          <li onClick={RecommendedBeans}>추천원두</li>
          <li onClick={bestcoffee}>Best</li>
          <li onClick={coldbrowcoffee}>콜드브루</li>
          <li onClick={giftclick}>선물세트</li>
          <li onClick={fruit}>과일청</li>
          <li onClick={review}>Review</li>
        </ul>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
