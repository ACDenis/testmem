import React, { useEffect } from "react";
import s from "./PartnersPage.module.css";
import { connect } from "react-redux";
import Partners from "../../misc/Partners/Partners";
import { fetchPartnersAction } from "../../store/actions/partnersAction";

const PartnersPage = ({  fetchPartners,  partners }) => {
  useEffect(() => {
    fetchPartners()
  }, [fetchPartners])


  return (
    <div className={s.main__container}>
      <div className={s.partners__container}>
        <div className={s.title__container}>
          <h2 className={s.news_title}>Наші партнери</h2>
        </div>
        <div className={s.partners}>
          {partners.length > 0 && partners.map((i, partnersItems) => (
          <Partners title={i.title} gallery={i.gallery} url={i.url} key={partnersItems._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {  partners: state.partners.partners };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPartners: () => dispatch(fetchPartnersAction
      ())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnersPage);
