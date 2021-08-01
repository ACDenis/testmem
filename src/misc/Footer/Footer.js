import React from "react";
import { useHistory } from "react-router-dom";
import s from "./Footer.module.css";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Gmail } from "../../assets/gmail.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";

const Footer = (props) => {
  const h = useHistory();
  return (
    <div className={s.footer__wrapper}>
    <footer className={s.footer}>
      <div className={s.footer__inner}>
        <div className={s.footer__top}>
          <div className={s.title}>НАШІ РЕСУРСИ</div>
          <a className={s.icon__container} href="">
            <Instagram className={s.icon} />
          </a>
          <a className={s.icon__container} href="mailto:kemt_teh@ukr.net">
            <Gmail className={s.icon} />
          </a>
          <a className={s.icon__container} href="https://ru-ru.facebook.com/kemt.kyiv">
            <Facebook className={s.icon} />
          </a>
        </div>
        <div className={s.info__container}>
          <div className={s.info__wrapper}>
            <div className={s.info__title}>Інформація про</div>
            <p className={s.info__item} onClick={() => h.push("/college") || window.scrollTo(0, 0)}>
              Коледж
            </p>
            <p className={s.info__item} onClick={() => h.push("/library") || window.scrollTo(0, 0)}>
              Бібліотека
            </p>
            <p className={s.info__item} onClick={() => h.push("/leadership") || window.scrollTo(0, 0)}>
              Керівництво
            </p>
          </div>
          <div className={s.info__wrapper}>
            <div className={s.info__title}>Інформація про</div>
            <p className={s.info__item} onClick={() => h.push("/actual-info")|| window.scrollTo(0, 0)}>Студентське життя</p>
            <p className={s.info__item} onClick={() => h.push("/dormitories")|| window.scrollTo(0, 0)}>Гуртожитки</p>
            <p className={s.info__item} onClick={() => h.push("/educational-program")|| window.scrollTo(0, 0)}>Освітні програми</p>
          </div>
          <div className={s.info__wrapper}>
            <div className={s.info__title}>Наша адреса</div>
           <p className={s.info__item}>м. Київ</p>
            <p className={s.info__item}>+38(044)-249-85-97</p>
            <p className={s.info__item}><a href="mailto:kemt_teh@ukr.net">kemt_teh@ukr.net</a></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Footer;
