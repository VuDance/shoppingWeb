import React, { useEffect, useState, useContext } from "react";
import classNames from "classnames/bind";
import style from "./Products.module.scss";
import axios from "axios";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { CardContext } from "../../Context/CardContextProvider";
// functions
import { isSelected, quantityCount } from "../../helper/function";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

export default function Products() {
  const { state, dispatch } = useContext(CardContext);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState(products);

  useEffect(() => {
    axios.get(`http://fakestoreapi.com/products`).then((res) => {
      setProducts(res.data);
      setData(res.data);
    });
  }, []);

  const updatedProduct = (cat) => {
    const updatedList = products.filter((x) => x.category === cat);
    return setData(updatedList);
  };
  return (
    <div className={cx("product")}>
      <div className={cx("btnFilter")}>
        <Button onClick={() => setData(products)} title="All" filter />
        <Button
          onClick={() => updatedProduct("men's clothing")}
          title="Men's clothing"
          filter
        />
        <Button
          onClick={() => updatedProduct("women's clothing")}
          title="Women's clothing"
          filter
        />
        <Button
          onClick={() => updatedProduct("jewelery")}
          title="Jewelery"
          filter
        />
        <Button
          onClick={() => updatedProduct("electronics")}
          title="Electronics"
          filter
        />
      </div>
      <div className={cx("card")}>
        {data.map((product, index) => (
          <div className={cx("item")}>
            <NavLink
              className={cx("cardItem")}
              key={index}
              to={`/${product.id}`}
            >
              <img className={cx("cardimg")} src={product.image} />
              <div className={cx("cardDesc")}>
                <h3 className={cx("cardTitle")}>
                  {product.title.substring(0, 50)}...
                </h3>
                <span className={cx("cardPrice")}>${product.price}</span>
              </div>
            </NavLink>
            <div className={cx("action")}>
              {quantityCount(state, product.id) > 1 && (
                <Button quantity
                  title='-'
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: product })
                  }
                />
                
              )}
              {quantityCount(state, product.id) === 1 && (
                <Button quantity
                  title={<FontAwesomeIcon icon={faTrashCan} />}
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: product })
                  }
                />
                  
                
              )}
              {quantityCount(state, product.id) > 0 && (
                <div className={cx("valueQuantity")}>
                  {quantityCount(state, product.id) > 0 && (
                    <span>{quantityCount(state, product.id)}</span>
                  )}
                </div>
              )}
              {isSelected(state, product.id) ? (
                <Button
                  title="+"
                  quantity
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: product })
                  }
                />
                
              ) : (
                <Button
                  buy
                  title="BUY NOW"
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: product })
                  }
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
