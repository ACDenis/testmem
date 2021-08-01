import React, { useEffect } from "react";
import s from "./News.module.css";
import { connect } from "react-redux";
import SmNewsCard from "../../misc/SmNewsCard/SmNewsCard";
import NewsCard from "../../misc/NewsCard/NewsCard";
import { fetchAllNewsActions } from "../../store/actions/newsAction";
import { fetchAdvAction } from "../../store/actions/advAction";
import Adv from "../../misc/Adv/Adv";

const News = ({ news, fetchAllNews, fetchAllAdv, adv }) => {
  useEffect(() => {
    fetchAllNews();
    fetchAllAdv();
  }, [fetchAllNews, fetchAllAdv]);

  return (
    <div className={s.content__container}>
      <div className={s.news__container}>
        <div className={s.title__container}>
          <h2 className={s.news_title}>Новини</h2>
        </div>
        {window.matchMedia("(max-width: 665px)").matches ? (
          <div className={s.sm__news}>
            {news.length &&
              news.map((newsItem, i) => (
                <SmNewsCard {...{ newsItem }} key={newsItem._id} />
              ))}
          </div>
        ) : (
          <div className={s.news}>
            {news.length > 0 &&
              news.map((newsItem, i) => (
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
              .map((advItem, i) => <Adv {...{ advItem }} key={advItem._id} />)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { news: state.news.news, adv: state.adv.adv };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllNews: () => dispatch(fetchAllNewsActions()),
    fetchAllAdv: () => dispatch(fetchAdvAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
