import React from "react";
import s from "./Adv.module.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Adv = ({advItem}) => {
  const {title, desc, gallery, _id} = advItem;

  // const { title, gallery, _id } = newsItem;
  const h = useHistory()
  return (
    <div className={s.main__wrapper} onClick={()=> h.push(`/single-news/${_id}`)}>
      <div className={s.adv__inner}>
        <img alt={'test'} src={gallery} className={s.bg__img} />
        <div className={s.hover__container}>
          <div className={s.tex__container}>
            <div className={s.text}>{title.slice(0, 30)}...</div>
            <div className={s.desc}>
              {desc.slice(0, 30)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Adv);
