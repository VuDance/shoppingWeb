import React from "react";
import classNames from "classnames/bind";
import style from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("infor")}>
        <div className={cx("slogan")}>
          “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ
          hành động của mình” là sứ mệnh, là triết lý, chiến lược.. luôn cùng
          chúng tôi tiến bước”
        </div>
      </div>

      <div className={cx("contact")}>
        <div className={cx("help")}>
          <span className={cx("title")}>help</span>
          <span className={cx("phone","df")}>
            <span className={cx("icon")}>
              <FontAwesomeIcon icon={faMobile} />
            </span>
            <a href="tel:0942650301">0942650301</a>
          </span>
          <span className={cx("mail","df")}>
            <span className={cx("icon")}>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <a href="mailto:nhuyedangnguyen@gmail.com">
              nhuyedangnguyen@gmail.com
            </a>
          </span>
          <div className={cx("location","df")}>
          <span className={cx("icon")}>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span>
              53/11C Tổ 80 KP7, Tân Thới Nhất, Quận 12,<br/> Thành phố Hồ Chí Minh
            </span>
          </div>
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
      </div>

      <div className={cx("payment")}>
        <img
          className={cx("paymentItem")}
          src="https://www.semtek.com.vn/wp-content/uploads/2021/05/1-8.jpg"
        />
      </div>
    </div>
  );
}

export default Footer;
