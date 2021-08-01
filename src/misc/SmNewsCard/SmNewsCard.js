import React from 'react'
import s from './SmNewsCard.module.css'
import { Link } from 'react-router-dom'

const SmNewsCard = ({ newsItem }) => {
  const { title, gallery, createdAt, _id, desc } = newsItem

  let sectionStyle = {
    backgroundImage: `url(${gallery})`,
  }
  return (
    <div className={s.main__wrapper}>
      <Link to={`/single-news/${_id}`} className={s.card} style={sectionStyle}>
        <div>
          <h1>{title.slice(0, 30)}</h1>
          <p>{desc.slice(0, 100)}...</p>
          <div className={s.date}>{createdAt.slice(0, 10)}</div>
        </div>
      </Link>
    </div>
  )
}

export default SmNewsCard
