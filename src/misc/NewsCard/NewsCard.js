import React from "react";
import s from "./NewsCard.module.css";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

const NewsCard = ({ newsItem }) => {
  const history = useHistory();
  const { title, gallery, _id } = newsItem;
  return (
    <div className={s.main__wrapper}>
      <div className={s.card__inner}>
        <div className={s.image__container}>
          <img
            src={gallery || require("../../assets/image-placeholder.webp")}
            alt="err"
            className={s.img}
          />
        </div>
        <div className={s.title__container}>
          <p className={s.title}>{title.slice(0, 60)}...</p>
          <div className={s.btn}>
            <Button
              title="Читати більше"
              size="sm"
              onClick={() => history.push(`/single-news/${_id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
