import React from "react";
import s from "./styles.module.css";
import MediaCard from "../../misc/CyclesComponent/CyclesComponent";
import logo from "../../assets/specialities/logo.webp";

const Cycles = () => {
  return (
    <div className={s.main__container}>
      <div className={s.partners__container}>
        <div className={s.title__container}>
          <h2 className={s.news_title}>Цикли</h2>
        </div>
        <div className={s.partners}>
          
          <MediaCard
            title="Цикл дисциплін професійної та практичної підготовки за освітньою програмою Електропостачання"
            img={logo}
            path="/elektropostach"
          />
          <MediaCard
            title="Цикл загально-технічних дисциплін"
            img={logo}
            path="/tech-duscupilinu"
          />
          <MediaCard
            title="Цикл філологічних дисциплін"
            img={logo}
            path="/filolog"
          />
          <MediaCard
            title="Цикл суспільно-економічних дисциплін"
            img={logo}
            path="/susup-duscupilinu"
          />
          <MediaCard
            title="Цикл дисциплін професійної та практичної підготовки спеціальності Комп'ютерна інженерія"
            img={logo}
            path="/ki"
          />
          <MediaCard
            title="Цикл дисциплін професійної та практичної підготовки та ремонт пристроїв електрозв’язку на транспорті"
            img={logo}
            path="/cukl-ez"
          />
          <MediaCard
            title="Цикл дисциплін професійної та практичної підготовки «Експлуатація радіотехнічних систем та пристроїв»"
            img={logo}
            path="/radioteh"
          />
          <MediaCard
            title="Цикл дисциплін професійної та практичної підготовки за освітньою програмою «Технічне обслуговування pемонт та експлуатація тягового рухомого складу»"
            img={logo}
            path="/teh-obslyga"
          />
          <MediaCard
            title="Цикл дисциплін професійної та практичної підготовки за освітньою програмою «Монтаж oбслуговування та ремонт автоматизованих систем керування рухом на залізничному транспорті»"
            img={logo}
            path="/montaz"
          />
        </div>
      </div>
    </div>
  );
};

export default Cycles;
