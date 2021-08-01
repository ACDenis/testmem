import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import s from "./AdminNews.module.css";
import { logoutAction } from "../../../../store/actions/loginAction";

const LogoutComponent = ({ logout }) => {
  const h = useHistory();
  const Logout = () => {
    logout();
    h.push("/login");
  };
  return (
    <div>
      <button className={s.logoutbtn} onClick={Logout}>
        Вийти
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);
