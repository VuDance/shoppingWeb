import React from 'react'
import classNames from "classnames/bind";
import style from "./Outfit.module.scss";

const cx = classNames.bind(style);


function Outfit() {
    const imgOutfit=[
        "https://mixmatch.bluecore.vn/ImagesUpload/product_images_resize/960_8720_20220905070137537.jpg",
        "https://mixmatch.bluecore.vn/ImagesUpload/product_images_resize/959_8668_20220905070013529.jpg",
        "https://mixmatch.bluecore.vn/ImagesUpload/product_images_resize/958_8360_20220905065825848.jpg",
        "https://mixmatch.bluecore.vn/ImagesUpload/product_images_resize/950_00792_20220826063225358.jpg",
        "https://mixmatch.bluecore.vn/ImagesUpload/product_images_resize/949_01144_20220826063049833.jpg",
        "https://mixmatch.bluecore.vn//ImagesUpload/product_images_resize/948_01497_20220826062758682.jpg",
        "https://mixmatch.bluecore.vn//ImagesUpload/product_images_resize/946_01260_20220826062259052.jpg",
        "https://mixmatch.bluecore.vn//ImagesUpload/product_images_resize/943_01082_20220826061443675.jpg",
        "https://mixmatch.bluecore.vn//ImagesUpload/product_images_resize/947_00555_20220826062458297.jpg",
        "https://mixmatch.bluecore.vn//ImagesUpload/product_images_resize/940_6089_20220804073314373.jpg",
        "https://mixmatch.bluecore.vn//ImagesUpload/product_images_resize/933_6783_20220804072433820.jpg",
        "https://mixmatch.bluecore.vn//ImagesUpload/product_images_resize/925_6193_20220804071641923.jpg"
    ]
  return (
    <>
    <div className={cx("title")}><span className={cx("titleName")}>Outfit Of The Day</span></div>
    <div className={cx("list")}>
        {imgOutfit.map((img,index)=>(
            <div key={index} className={cx("card")}>
                <img src={img} className={cx("item")}/>
            </div>
        ))}
    </div>
    </>
  )
}

export default Outfit