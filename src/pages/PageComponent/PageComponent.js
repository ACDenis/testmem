import React, {useEffect, useState} from "react";
import s from "./PageComponent.module.css";
import {connect} from "react-redux";
import {fetchAdvAction} from "../../store/actions/advAction";
import Adv from "../../misc/Adv/Adv";
import { fetchPagesByPath} from "../../store/api/api";
import {useLocation} from 'react-router-dom'
import ScrollToTop from 'react-scroll-up'
import {ReactComponent as Scroll} from "../../assets/up-arrow.svg"
const PageComponent = ({pageTitle, adv, fetchAllAdv}) => {
  const [page, setPage] = useState();
  const {pathname} = useLocation()

  useEffect(() => {
    fetchPagesByPath(pathname)
    .then(({data}) => {
        setPage(data)
      })
      .catch(e => {
        console.log(e)
      })
    fetchAllAdv();
  }, [fetchAllAdv, pathname]);


  
  return (
    <div className={s.main__container}>
      <div className={s.leader__container}>
        <div className={s.title__container}>
          <h2 className={s.news_title}>{pageTitle}</h2>
        </div>
        {page && <div className={s.container} dangerouslySetInnerHTML={{__html: page.html}}/>}
      </div>
      <div className={s.events__container}>
        <div className={s.events__inner}>
          <div className={s.title__container}>
            <h2 className={s.news_title}>Події</h2>
          </div>
          <div className={s.adv__container}>
            {adv.length > 0 &&
            adv
              .reverse()
              .slice(0, 3)
              .map((advItem, i) => (
                <Adv {...{advItem}} key={advItem._id}/> 
              ))}
          </div>
        </div>
      </div>
      <ScrollToTop showUnder={500} >
       <Scroll className={s.scroll} />
       </ScrollToTop>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {adv: state.adv.adv};
};
const mapDispatchToProps = (dispatch) => {
  return {fetchAllAdv: () => dispatch(fetchAdvAction())};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageComponent);
