import React from 'react'
import classNames from "classnames/bind";
import style from "./Button.module.scss";

const cx = classNames.bind(style);

export default function Button({title , onClick, filter,buy,add,buyInPrd,quantity}) {
  const classes = cx("btn",{filter,buy, add,buyInPrd,quantity})
  return (
    <button className= {classes} onClick={onClick}>{title}</button>
  )
}
