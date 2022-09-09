import React, { useContext } from "react";
import Navbar from "../../component/Navbar/Navbar";
import classNames from "classnames/bind";
import style from "./Cart.module.scss";
import { CardContext } from "../../Context/CardContextProvider";
import { NavLink } from "react-router-dom";
import { isSelected, quantityCount } from "../../helper/function";
import Button from "../../component/Button/Button";
import swal from 'sweetalert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Cart() {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className={cx("cart")}>
      <Navbar />
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={cx("empty")}>
          <p className={cx("title")}>Your card is empty!</p>
          <NavLink to="/" className={cx("back")}>Back to Shop</NavLink>
        </div>
      )}
      <div className={cx("listItem")}>
        {state.selectedItems.map((item) => (
          <div key={item.id} className={cx("item")}>
            <img src={item.image} width="80px" />
            <div className={cx("itemDesc")}>
              <h3 className={cx("title")}>{item.title}</h3>
              <p>${item.price}</p>
            </div>
            <div className={cx("quatityBtn")}>
              {quantityCount(state, item.id) > 1 && (
                <button className={cx("btn")}
                  onClick={() => dispatch({ type: "DECREASE", payload: item })}
                >
                  -
                </button>
              )}
              {quantityCount(state, item.id) === 1 && (
                <button className={cx("btn")}
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: item })
                  }
                >
                  <FontAwesomeIcon icon = {faTrashCan}/>
                </button>
              )}
              {quantityCount(state, item.id) > 0 && (
                <div className={cx("value")}>
                  {quantityCount(state, item.id) > 0 && (
                    <span>{quantityCount(state, item.id)}</span>
                  )}
                </div>
              )}
              {isSelected(state, item.id) && (
                <button className={cx("btn")}
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={cx("checkout")}>
        <div className={cx("total")}>
          Total ({state.itemsCounter} item) : <span>${state.total}</span> 
        </div>
        <Button title="Check Out" buyInPrd onClick={() => dispatch({ type: "CHECKOUT" })}/>
      </div>
      {state.checkout &&
        (swal({
          text: "Checked Out Successfully!",
          icon: "success",
        }),
        (
          <div className={cx("empty")}>
            <h3 fontWeight={700}>
              Checked Out Successfully!
            </h3>
            <NavLink to="/" className={cx("back")}>Back to shop</NavLink>
          </div>
        ))}
    </div>
  );
}

export default Cart;
