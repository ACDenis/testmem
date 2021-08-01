import { withFormik } from "formik";
import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
import s from "./Auth.module.css";

const Auth = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  const [isRegister, setRegister] = useState(false);
  // const setFormRegister = () => setRegister(true);
  const setFormLogin = () => setRegister(false);
  return (
    <div>
      <div className={s.auth}>
        <div
          className={
            isRegister
              ? `${s.container} ${s["right-panel-active"]}`
              : `${s.container}`
          }
          id="container"
        >
          <div className={`${s["form-container"]} ${s["sign-up-container"]}`}>
            <form action="#">
              <h2 className={s.title}>Створити акаунт</h2>
              <div className={s.date__container}>
                <div style={{ marginRight: "10px" }}>
                  <span className={s.label}>Ім'я</span>
                  <input />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <span className={s.label}>Прізвище</span>
                  <input placeholder="Text" />
                </div>
              </div>
              <span className={s.label}>Електронна пошта</span>
              <input />
              <span className={s.label}>Пароль</span>
              <input type="password" />
              <button>Зареєструватись</button>
              <div className={`${s["social-container"]}`}></div>
            </form>
          </div>
          <div className={`${s["form-container"]} ${s["sign-in-container"]}`}>
            <div className={s.log__wrapper}>
              <h2 className={s.title}>Увійти</h2>
              <div className={s.input__container}>
                <div className={s.login__container}>
                  <span className={s.label}>Логін</span>
                  <input
                    placeholder="admin@gmail.com"
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                  />
                </div>
                <div className={s.login__container}>
                  <span className={s.label}>Пароль</span>
                  <input
                    placeholder="********"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <button onClick={handleSubmit}>Увійти</button>
              {/* <span href="#" className={s.fogot__pswd}>
                Забули пароль?
              </span> */}
              <div className={s["social-container"]}></div>
            </div>
          </div>
          <div className={s["overlay-container"]}>
            <div className={s.overlay}>
              <div className={`${s["overlay-panel"]} ${s["overlay-left"]}`}>
                <h1>Створити акаунт</h1>
                {/* <p>Щоб робити покупки увійдіть у свій обліковий запис</p> */}
                <button onClick={setFormLogin} className={s.ghost} id="signIn">
                  Увійти
                </button>
              </div>
              <div className={`${s["overlay-panel"]} ${s["overlay-right"]}`}>
                <div className={s.reg__container}>
                  <h1>Увійти</h1>
                  {/* <p>Зареєструйтесь, якщо ви у нас вперше </p> */}
                  {/* <button
                    onClick={setFormRegister}
                    className={s.ghost}
                    id="signUp"
                  >
                    Зареєструватись
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  handleSubmit: async (values, { props: { login, history } }) => {
    const isSuccess = await login(values);
    if (isSuccess) {
      history.push("/admin-news");
    } else {
      alert("Невірно введені данні");
    }
  },
})(Auth);

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return { login: (data) => dispatch(loginAction(data)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
