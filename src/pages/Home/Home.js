import React, { useEffect } from "react";
import s from "./Home.module.css";
import NewsCard from "../../misc/NewsCard/NewsCard";
import Adv from "../../misc/Adv/Adv";
import Partners from "../../misc/Partners/Partners";
import Header from "../../misc/Header/Header";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import advIcon1 from "../../assets/deliveryIcon.png";
import advIcon2 from "../../assets/scheduleIcon.png";
import SmNewsCard from "../../misc/SmNewsCard/SmNewsCard";
import { useHistory } from "react-router-dom";
import { fetchAllNewsActions } from "../../store/actions/newsAction";
import { connect } from "react-redux";
import { fetchAdvAction } from "../../store/actions/advAction";
import { fetchPartnersAction } from "../../store/actions/partnersAction";
import AdvantagesCard from "../../misc/AdvancedCard/AdvancedCard";
import CarouselComponent from "../../misc/Carousel/Carousel";

const Home = ({
  news,
  fetchAllNews,
  adv,
  fetchAllAdv,
  fetchPartners,
  partners,
}) => {
  const h = useHistory();
  useEffect(() => {
    window.scroll({ left: 0, top: 0 });
    fetchAllAdv();
    fetchAllNews();
    fetchPartners();
  }, [fetchAllNews, fetchAllAdv, fetchPartners]);
  return (
    <div className={s.main}>
      <div className={s.main__wrapper}>
        <div className={s.carousel_container}>
          {/* <div className={s.title}>
            <h2>Київський електромеханічний фаховий коледж</h2>
          </div> */}
          <CarouselComponent className={s.CarouselComponent} />
        </div>
        <div className={s.right__wrapper}>
          <div className={s.header}>
            <div>
              <Header homePageVisibility />
            </div>
            <div className={s.qwe}>
              <div className={s.mein__menu}>
                <div
                  className={s.item_wrapper}
                  onClick={() => h.push("/college")}
                >
                  <div className={s.item}>
                    <img src={icon1} className={s.icon} alt="err" />
                    <div className={s.item__inner}>
                      <div className={s.item__title}>Коледж</div>
                    </div>
                  </div>
                </div>
                <div className={s.item_wrapper}>
                  <div className={s.item} onClick={() => h.push("/cost")}>
                    <img src={icon2} className={s.icon} alt="err" />
                    <div className={s.item__inner}>
                      <div className={s.item__title}>Абітурієнту</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.mein__menu}>
                <div
                  className={s.item_wrapper}
                  onClick={() => h.push("/lessons")}
                >
                  <div className={s.item}>
                    <img src={icon3} className={s.icon} alt="err" />
                    <div className={s.item__inner}>
                      <div className={s.item__title}>Студенту</div>
                    </div>
                  </div>
                </div>
                <div className={s.item_wrapper}>
                  <div
                    className={s.item}
                    onClick={() => h.push("/specialities")}
                  >
                    <img src={icon4} className={s.icon} alt="err" />
                    <div className={s.item__inner}>
                      <div className={s.item__title}>Спеціальності</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={s.mein__menu}>
                <div
                  className={s.item_wrapper}
                  onClick={() => h.push("/library")}
                >
                  <div className={s.item}>
                    <img src={icon5} className={s.icon} alt="err" />
                    <div className={s.item__inner}>
                      <div className={s.item__title}>Бібліотека</div>
                    </div>
                  </div>
                </div>
                <div className={s.item_wrapper} onClick={() => h.push("/news")}>
                  <div className={s.item}>
                    <img src={icon6} className={s.icon} alt="err" />
                    <div className={s.item__inner}>
                      <div className={s.item__title}>Новини</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.content__container}>
        <div className={s.news__container}>
          <div className={s.title__container}>
            <h2 className={s.news_title}>Новини</h2>
          </div>
          {window.matchMedia("(max-width: 665px)").matches ? (
            <div className={s.sm__news}>
              {news.length &&
                news
                  .reverse()
                  .slice(0, 4)
                  .map((newsItem, i) => (
                    <SmNewsCard {...{ newsItem }} key={newsItem._id} />
                  ))}
            </div>
          ) : (
            <div className={s.news}>
              {news.length > 0 &&
                news
                  .slice(0, 4)
                  .map((newsItem, i) => (
                    <NewsCard {...{ newsItem }} key={newsItem._id} />
                  ))}
            </div>
          )}
        </div>
        <div className={s.events__container}>
          <div className={s.title__container}>
            <h2 className={s.news_title}>Події</h2>
          </div>
          <div className={s.events}>
            {adv.length > 0 &&
              adv
                .slice(0, 3)
                .map((advItem, i) => (
                  <Adv {...{ advItem }} key={advItem._id} />
                ))}
          </div>
        </div>
      </div>
      <div className={`${s.section} ${s.advantages}`}>
        <div className={s.title__container1}>
          <h2 className={s.news_title}>Переваги</h2>
        </div>
        <div className={s.advantages__cards}>
          <AdvantagesCard
            bodyText="Матеріально-технічна база Коледжу забезпечує необхідні умови для реалізації освітніх та освітньо-професійних програм, обладнання постійно поповнюється та оновлюється. Оснащення аудиторій інтерактивними та мультимедійними пристроями вносить розмаїття у хід освітнього процесу."
            imgSrc={advIcon1}
            mainColor="#333b85"
          />
          <AdvantagesCard
            bodyText="Зручне місцерозташування коледжу та розміщення гуртожитків поблизу і навчальним корпусом. У коледжі діють гуртки та спортивні секції, працює тренажерна зала."
            imgSrc={advIcon2}
            mainColor="#333b85"
          />
          <AdvantagesCard
            bodyText="Можливість безперервного навчання після закінчення 9го класу школи до здобуття ступеня бакалавру."
            imgSrc={advIcon1}
            mainColor="#333b85"
          />
          <AdvantagesCard
            bodyText="Можливість здобуття освіти за дуальною формою навчання."
            imgSrc={advIcon2}
            mainColor="#333b85"
          />
        </div>
      </div>
      <div className={s.partners__container}>
        <div className={s.partners__inner}>
          <div className={s.title__container}>
            <h2 className={s.news_title} onClick={() => h.push("/partners")}>
              Наші партнери
            </h2>
          </div>
          <div className={s.partners}>
            {partners.length > 0 &&
              partners.map((i, partnersItems) => (
                <Partners title={i.title} gallery={i.gallery} url={i.url} key={partnersItems._id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    adv: state.adv.adv,
    partners: state.partners.partners,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllNews: () => dispatch(fetchAllNewsActions()),
    fetchAllAdv: () => dispatch(fetchAdvAction()),
    fetchPartners: () => dispatch(fetchPartnersAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
