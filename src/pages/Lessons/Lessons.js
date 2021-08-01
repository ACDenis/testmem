import React, { useEffect } from "react";
import s from "./Lessons.module.css";
import { connect } from "react-redux";
import Button from "../../misc/Button/Button";
import Adv from "../../misc/Adv/Adv";
import { fetchAdvAction } from "../../store/actions/advAction";
import { getShaduleActon } from "../../store/actions/sheduleAction";

const Lessons = ({ adv, fetchAdv, shedule, fetchShedule }) => {
  useEffect(() => {
    fetchAdv();
    fetchShedule();
  }, [fetchAdv, fetchShedule]);

  const download = (url, filename) => {
    fetch(url).then(function (t) {
      return t
        .blob()
        .then((b) => {
          let a = document.createElement("a");
          a.href = URL.createObjectURL(b);
          a.setAttribute("download", filename);
          a.click();
        })
        .catch((e) => console.error(e));
    });
  };

  return (
    <div className={s.main__wrapper}>
      <div className={s.main}>
        <div className={s.content__container}>
          <div className={s.title__container}>
            <h2 className={s.title}>РОЗКЛАД ЗАНЯТЬ</h2>
          </div>
          <div className={s.button__container}>
            <Button
              onClick={() => download(shedule, shedule.split("/schedule/")[1])}
              title="Завантажити Розклад"
            />
          </div>
        </div>
        <div className={s.events__container}>
          <div className={s.events__inner}>
            <div className={s.title__container}>
              <h2 className={s.news_title}>Події</h2>
            </div>
            <div className={s.adv__container}>
              {adv.length > 0 &&
                adv
                  .slice(0, 4)
                  .map((advItem, i) => <Adv {...{ advItem }} key={advItem} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { adv: state.adv.adv, shedule: state.shedule.shedule };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdv: () => dispatch(fetchAdvAction()),
    fetchShedule: () => dispatch(getShaduleActon()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);
