import React from "react";
import { useHistory } from "react-router";
import s from "./Partners.module.css";

const Partners = ({title, url, gallery, route }) => {
const h = useHistory()
  return (
    <a className={s.wrapper} href={url} onClick={()=> h.push(route)} >
      <div className={s.main__wrapper}>
        <div className={s.title}>{title.slice(0,50)}</div>
        <div className={s.image__container}>
          <img src={gallery} className={s.img} alt="err" />
        </div>
      </div>
    </a>
  );
};

export default Partners;
