import React, { useEffect } from "react"
import { connect } from "react-redux"
import Adv from "../../misc/Adv/Adv"
import { fetchAdvAction } from "../../store/actions/advAction"
import s from "./AdvWrapper.module.css"


const AdvWrapper = ({ fetchAllAdv, adv }) => {
    useEffect(() => {
        fetchAllAdv()
    }, [fetchAllAdv])
    return (
        <div className={s.main__container}>
            <div className={s.main__wrapper}>
                {/* hear is content */}
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
                                    <Adv {...{ advItem }} key={advItem._id} />
                                ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { adv: state.adv.adv };
};
const mapDispatchToProps = (dispatch) => {
    return { fetchAllAdv: () => dispatch(fetchAdvAction()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvWrapper);
