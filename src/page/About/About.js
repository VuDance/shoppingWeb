import React from "react";
import classNames from "classnames/bind";
import style from "./About.module.scss";
import Navbar from "../../component/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(style);

function About() {
  return (
    <div>
      <Navbar />
      <div className={cx("container")}>
        <p>
          Somehow là thương hiệu thời trang B2C kết hợp cùng chuỗi bán lẻ tại
          các thành phố lớn ở Việt Nam. Được thành lập và vận hành với giá trị
          cốt lõi là lấy khách hàng làm trung tâm, và duy trì quan điểm "bằng
          cách nào đó, thời trang của mỗi người sẽ đẹp hơn qua mỗi ngày."
          <div className={cx("local")}>
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            <span>
              53/11C Tổ 80 KP7, Tân Thới Nhất, Quận 12, Thành phố Hồ Chí Minh
            </span>
          </div>
          <div className={cx("local")}>
            <FontAwesomeIcon icon={faMobileScreen} /> <span>0942650301</span>
          </div>
          <div className={cx("follow")}>
            <div className={cx("title")}>Follow us</div>
            <a href="#">
              <img src="https://theme.hstatic.net/1000026602/1000911550/14/icon_fbn.png?v=425" />
            </a>
            <a href="#">
              <img src="https://theme.hstatic.net/1000026602/1000911550/14/icon_instan.png?v=425" />
            </a>
          </div>
          <NavLink to="/" className={cx("back")}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>BACK</span>
          </NavLink>
        </p>
        <img
          width="500px"
          src="https://media.zim.vn/61694b83a2d9bb001f9b41ba/idea-for-ielts-writing-topic-online-shopping-mua-sam-tai-cua-hang.jpg"
        />
      </div>
    </div>
  );
}

export default About;
