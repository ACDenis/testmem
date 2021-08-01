import React from "react";
import s from "./styles.module.css";
import bakalavr from "../../assets/test.jpg";
import logo from "../../assets/specialities/logo.webp";
import asy from "../../assets/specialities/asy.jpg";
import et from "../../assets/specialities/et.jpg";
import el from "../../assets/specialities/el.jpg";
import ez from "../../assets/specialities/zal.webp";
import MediaCard from "../../misc/CyclesComponent/CyclesComponent";

const Viddtilennya = () => {
  return (
    <div className={s.main__container}>
      <div className={s.partners__container}>
        <div className={s.title__container}>
          <h2 className={s.news_title}>Відділення</h2>
        </div>
        <div className={s.partners}>
          <MediaCard title="Відділення АСУ" img={asy} path="/asy" />
          <MediaCard title="Відділення ЕЛ" img={el} path="/ep" />
          <MediaCard title="Відділення ЕТ" img={et} path="/et" />
          <MediaCard title="Відділення ЕЗ" img={ez} path="/ez" />
          <MediaCard
            title="Відділення бакалаврату"
            img={bakalavr}
            path="/bakalavr"
          />
          <MediaCard title="Заочне відділення" img={logo} path="/zaoch" />
        </div>
      </div>
    </div>
  );
};

export default Viddtilennya;
