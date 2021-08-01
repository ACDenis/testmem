import React, { useEffect } from "react";
import s from "./Specialties.module.css";
import { connect } from "react-redux";
import { ReactComponent as Spec } from "../../assets/spec.svg";
import main from "../../assets/spec.jpg";
import Adv from "../../misc/Adv/Adv";
import { fetchAdvAction } from "../../store/actions/advAction";
const Specialties = ({specpageTitle, adv, fetchAllAdv}) => {

  useEffect(()=> {
    fetchAllAdv()
  },[fetchAllAdv])

  return (
    <div className={s.main}>
      <div className={s.image__container}>
        <div className={s.image__inner}>
          <div className={s.image__title}>
            Почніть здобувати новий рівень освіти разом з нами!
          </div>
        </div>
        <div className={s.icon__container}>
          <Spec className={s.spec} />
        </div>
      </div>
      <div className={s.main__container}>
        <div className={s.leader__container}>
          <div className={s.title__container}>
            <h2 className={s.news_title}>{specpageTitle}</h2>
          </div>
          <div className={s.leader__inner}>
            <div className={s.single__leader}>
              <div className={s.single__leader__inner}>
                <div className={s.leader__flex}>
                  <img alt='dsfdsfsd' src={main} className={s.leader__img} />
                  <div className={s.leader__desc}>
                    <h3 className={s.leader__name}>
                      151 Автоматизація та комп`ютерно-інтегровані технології»
                    </h3>
                    <p className={s.leader__info}>за спеціалізаціями:</p>
                    <p>
                      «Монтаж, обслуговування та ремонт автоматизованих систем
                      керування»
                    </p>
                    <p className={s.leader__info}>
                      «Обслуговування систем управління та автоматики»{" "}
                    </p>
                    <p className={s.leader__info}></p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.spec__descr}>
              <div className={s.title__container}>
                <h2 className={s.news_title}>Концепція АСУ</h2>
              </div>
              <div className={s.desc}>
                <p>
                  Сфера професійної діяльності випускника спеціальності 151
                  «Автоматика та комп`ютерно-інтегровані технології» 1. Монтаж,
                  експлуатація, технічне обслуговування і ремонт пристроїв
                  сигналізації, централізації та блокування; застосування
                  методів і засобів підвищення надійності та довговічності
                  пристроїв, що відповідають за безпеку руху. 2. Реалізація на
                  виробництві проектної та нормативно-технічної документації для
                  пристроїв СЦБ. 3. Випробування нових зразків пристроїв СЦБ. 4.
                  Засоби забезпечення оптимального функціонування пристроїв СЦБ.
                  Основні навчальні дисципліни: Основи автомати і дискретні
                  пристрої СЦБ, Монтаж,обслуговування та ремонт пристроїв СЦБ,
                  Автоматизовані станційні системи управління рухом поїздів,
                  Автоматизовані системи інтервального регулювання рухом
                  поїздів, Електропостачання систем СЦБ, Системи
                  автоматизованого контролю технічного стану рухомого складу під
                  час руху поїзду, Автоматизовані системи телеуправління та
                  телесигналізації.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.events__container}>
          <div className={s.events__inner}>
            <div className={s.title__container}>
              <h2 className={s.news_title}>Події</h2>
            </div>
            <div className={s.adv__container}>
            {adv.length > 0 &&  adv.reverse().slice(0, 4).map((advItem, i)=>
              <Adv {...{advItem}} key={advItem._id} />
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {adv: state.adv.adv};
};
const mapDispatchToProps = (dispatch) => {
  return {fetchAllAdv: () => dispatch(fetchAdvAction())};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialties);
