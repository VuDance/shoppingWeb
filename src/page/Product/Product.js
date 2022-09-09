import axios from "axios";
import React, { useEffect, useState,useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer"
import classNames from "classnames/bind";
import style from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../../component/Button/Button";
import {CardContext} from "../../Context/CardContextProvider"

const cx = classNames.bind(style);

export default function Product() {
  const [product, setProduct] = useState([]);
  const [titleAdd,setTitleAdd]= useState('ADD TO CART')
  const { state, dispatch } = useContext(CardContext);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);
  

  const handleCart=(product)=>{
    if(titleAdd==="ADD TO CART"){
      setTitleAdd("REMOVE FROM CART")
      dispatch({
        type: "ADD_ITEM",
        payload: product,
      })
    }
    else{
      dispatch({
        type: "REMOVE_ITEM",
        payload: product,
      })
      setTitleAdd("ADD TO CART")
    }
  }
  const handleBuy=(product)=>{
    if(titleAdd==="ADD TO CART"){
      setTitleAdd("REMOVE FROM CART")
      dispatch({
        type: "ADD_ITEM",
        payload: product,
      })
    }
    
  }
  
  return (
    <div>
      <Navbar />
      <div className={cx("product")}>
        <div className={cx("productImg")}>
          <img src={product.image} />
        </div>
        <div className={cx("productDesc")}>
          <div className={cx("title")}>{product.title}</div>
          <div className={cx("price")}>${product.price}</div>
          <div className={cx("description")}>
            <div className={cx("descriptionTitle")}>description :</div>
            {product.description}</div>
          <div className={cx("rate")}>
            <div className={cx("rating")}>
              Rating: {product.rating && product.rating.rate}
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={cx("purchases")}>
              Purchased: {product.rating && product.rating.count}
            </div>
          </div>

          <div className={cx("button")}>
            <Button title={titleAdd} add onClick={()=>handleCart(product)}/>
            <NavLink to="/cart" ><Button title="BUY NOW" buyInPrd onClick={()=>handleBuy(product)}/></NavLink>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
