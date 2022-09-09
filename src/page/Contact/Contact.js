import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./Contact.module.scss";
import Button from "../../component/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const cx = classNames.bind(style);

function Contact() {
  const [check,setCheck]=useState(false)
  const handleCheck = (check) => {
    setCheck(true)
    console.log(check);
  };

  return (
    <div className={cx("contact")}>
      {!check ? (
        <div className={cx("form")}>
          <div className={cx("formTitle")}>Contact us</div>
          <p className={cx("formText")}>
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className={cx("formContainer")}>
            <div className={cx("infor")}>
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className={cx("input")}>
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={cx("value")}
                      placeholder="Your name"
                    />
                  </div>
                  <span></span>
                  <div>
                    <div>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className={cx("value")}
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className={cx("bigValue")}
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div>
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className={cx("bigValue", "big")}
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
              </form>

              <Button title="Send" buy onClick={() => handleCheck(check)} />
            </div>

            <div className={cx("inforUs")}>
              <ul className={cx("listInfor")}>
                <li className={cx("listItem")}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={cx("icon")}
                  />
                  <p>
                    53/11C Tổ 80 KP7, Tân Thới Nhất, Quận 12, Thành phố Hồ Chí
                    Minh, Việt Nam
                  </p>
                </li>

                <li className={cx("listItem")}>
                  <FontAwesomeIcon icon={faPhone} className={cx("icon")} />
                  <p>+84942 650 301</p>
                </li>

                <li className={cx("listItem")}>
                  <FontAwesomeIcon icon={faEnvelope} className={cx("icon")} />
                  <p>contact@mdbootstrap.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className={cx("empty")}>
            <img width="150px" src="https://i.pinimg.com/originals/3f/b7/bc/3fb7bc16d7af89847e1627d42cbff7f5.png"/>
          <p className={cx("title")}>We have received it, we will get back to you as soon as possible</p>
          <NavLink to="/" className={cx("back")}>
            Back to Shop
          </NavLink>
        </div>
      )}
      {check &&
        (swal({
          text: "Successfully!",
          icon: "success",
        }),
        (
          <></>
        ))}
    </div>
  );
}

export default Contact;
