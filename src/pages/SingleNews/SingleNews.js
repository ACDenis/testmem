import React, { useEffect } from 'react'
import s from './SingleNews.module.css'
import { ReactComponent as Clock } from '../../assets/clock.svg'
import SmNewsCard from '../../misc/SmNewsCard/SmNewsCard'
import { connect } from 'react-redux'
import {
  fetchAllNewsActions,
  getSingleNewsAction,
} from '../../store/actions/newsAction'
import Linkify from 'react-linkify'

const SingleNews = ({ getSingleNews, match, singleNews, news, fetchNews }) => {
  const { title, desc, gallery, updatedAt, _id } = singleNews
  useEffect(() => {
    if (match.params?.id) {
      getSingleNews(match.params.id)
    }
  }, [match.params?.id, getSingleNews])

  useEffect(() => {
    fetchNews()
    window.scroll({ left: 0, top: 0 })
  }, [fetchNews])

  news = news.filter(function (item) {
    return item._id !== match.params.id
  })

  return (
    !!_id && (
      <div className={s.main}>
        <div className={s.news__container}>
          <div className={s.title__container}>
            <h3 className={s.title}>{title}</h3>
            <div className={s.date__container}>
              <Clock className={s.clock} />
              <p className={s.date}>{updatedAt.slice(0, 10)}</p>
            </div>
          </div>
          <div className={s.image__container}>
            <img
              src={gallery || require('../../assets/image-placeholder.webp')}
              className={s.img}
              alt="loading..."
            />
          </div>
          <div className={s.desc__container}>
            <Linkify className={s.desc}>{desc}</Linkify>
            {/* <p className={s.desc}>{desc}</p> */}
          </div>
        </div>
        <div className={s.other__news__container}>
          <div className={s.title__container2}>
            <h3 className={s.title2}>Новини</h3>
          </div>
          <div className={s.other__news}>
            {news.length &&
              news
                .slice(0, 4)
                .map((newsItem, i) => (
                  <SmNewsCard {...{ newsItem }} key={newsItem._id} />
                ))}
          </div>
        </div>
      </div>
    )
  )
}

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    singleNews: state.news.single,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSingleNews: (id) => dispatch(getSingleNewsAction(id)),
    fetchNews: () => dispatch(fetchAllNewsActions()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleNews)
