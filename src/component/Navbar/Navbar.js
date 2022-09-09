import React,{useContext} from "react";
import classNames from "classnames/bind";
import style from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { CardContext } from "../../Context/CardContextProvider";


const cx = classNames.bind(style);

export default function Navbar() {
  const { state } = useContext(CardContext);
  return (
    <div>
      <nav className={cx("header")}>
        <div className={cx("Container")}>
          <div className={cx("sex")}>
            <Button className={cx("active")} title="Male" />
            <Button title="Famale" />
          </div>
          <div className={cx("logo")}>
            <img
              src="https://theme.hstatic.net/1000026602/1000911550/14/logo.jpg?v=395"
              alt=""
              className={cx("logoImg")}
            />
          </div>
          <div className={cx("cart")}>
            <FontAwesomeIcon icon={faUser} className={cx("icon")} />

            <NavLink to="/cart">
              <span>{state.itemsCounter}</span>
              <FontAwesomeIcon icon={faBagShopping} className={cx("icon")} />
            </NavLink>
          </div>
        </div>
        <div className={cx("navbar")}>
          <ul className={cx("navContainer")}>
            <NavLink to="/" className={cx("navItem")}>
              Home
            </NavLink>
            <NavLink to="/products" className={cx("navItem")}>
              Products
            </NavLink>
            <NavLink to="/about" className={cx("navItem")}>
              About
            </NavLink>
            <NavLink to="/contact" className={cx("navItem")}>
              Contact
            </NavLink>
          </ul>
          <div className={cx("search")}>
            <input
              className={cx("searchInput")}
              type="search"
              placeholder="#Somehow..."
            />
            <button className={cx("searchBtn")} type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
