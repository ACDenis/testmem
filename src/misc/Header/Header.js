import s from "./Header.module.css";
import {ReactComponent as BurgerIcon} from "../../assets/burger.svg";
import {Link, useHistory, withRouter} from "react-router-dom";
import {Burger} from "../Burger/Burger";
import React, {useState} from "react";

const Header = ({homePageVisibility}) => {
  const [isModalVisible, setModalVisble] = useState(false);
  const isOpenBurger = () => {
    setModalVisble(!isModalVisible);
  };
  const h = useHistory();
  const {pathname} = h.location;
// const handleClick = ()=>{<Collage url={fsdioiwohfsdhfjsd}/>}
  return (
    !homePageVisibility ? <div>
        {pathname === "/" ? null : (
          <>
            <div className={s.items__container}>
              <Link to="/" className={s.link}>
                Головна
              </Link>
              <Link to="/college" className={s.link}>
                Коледж
              </Link>
              <Link to="/specialities" className={s.link}>
                Абітурієнту
              </Link>
              <Link to="/lessons" className={s.link}>
                Студенту
              </Link>
              <Link to="/leadership" className={s.link}>
                Керівництво
              </Link>
              <div onClick={isOpenBurger}>
                <BurgerIcon className={s.burger}/>
              </div>
            </div>
            <Burger
              isModalVisible={isModalVisible}
              setModalVisble={setModalVisble}
            />
          </>
        )}
      </div>
      : <div>
        <>
          <div className={s.items__container}>
            <Link to="/" className={s.link}>
              Головна
            </Link>
            <Link to="/college" className={s.link}>
              Коледж
            </Link>
            <Link to="/specialities" className={s.link}>
              Абітурієнту
            </Link>
            <Link to="/lessons" className={s.link}>
              Студенту
            </Link>
            <Link to="/leadership" className={s.link}>
                Керівництво
              </Link>
            <div onClick={isOpenBurger}>
              <BurgerIcon className={s.burger}/>
            </div>
          </div>
          <Burger
            isModalVisible={isModalVisible}
            setModalVisble={setModalVisble}
          />
        </>
      </div>
  );
};

export default withRouter(Header);
