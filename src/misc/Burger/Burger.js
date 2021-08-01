import React, {useEffect, useState} from "react";
import s from "./Burger.module.css";
import {Link, useHistory} from "react-router-dom";
import {header} from "../../config/header.json";
import Select from "react-select";
import { fetchPages } from "../../store/api/api";

export const Burger = ({isModalVisible, setModalVisble}) => {
  const [isOnBurger, setIsOnBurger] = useState(false);
  const [isOnBurgerChild, setIsOnBurgerChild] = useState(false);
  const [isParentVisible, setIsParentVisible] = useState(true);
  const [secondIndex, setSecondIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages()
      .then(({data}) => {
        const formattedData = data.map(item => {
          return {label: item.title, value: item.path, rest: item};
        })
        setPages(formattedData)
      }).catch(e => console.error('Search fetchPages === ', e))
  }, []);

  const handleExit = () => {
    setModalVisble(!isModalVisible);
    setIsParentVisible(true)
    setIsOnBurger(false);
    setIsOnBurgerChild(false);
    document.body.style.overflow = "visible";
  };
  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "scroll-y";
  }, [isModalVisible])


  const handleHover = (i) => {
    setIndex(i);
    setIsOnBurger(!isOnBurger);
    setIsParentVisible(!isParentVisible);
    setIsOnBurgerChild(false);
  };

  const handleChildHover = (i) => {
    setSecondIndex(i);
    setIsOnBurgerChild(!isOnBurgerChild);
  };

  const childrenClick = (menu) => {
    handleExit();
    h.push(menu.path);
  };

  const h = useHistory();

  const pageSelect = ({value: url}) => {
    h.push(url);
    handleExit();
  };
  const homeRoute = () => {
    h.push("/")
    handleExit();
  }
  return (
    isModalVisible && (
      <>
        <p className={s.exit} onClick={handleExit}>
          x
        </p>
        <div className={s.container}>
          <div className={window.innerWidth <= 450 && !isParentVisible ? s.dn : s.menu__block}>
            <div className={s.main}>
               <p className={s.title} onClick={()=> homeRoute()}>Головна</p>
              {header.map((menu, i) => {
                if (header[i].children.length) {
                  return (
                    <p
                      className={s.title}
                      key={i}
                      onClick={() => handleHover(i)}
                    >
                      {menu.title}
                    </p>
                     
                  );
                } else {
                  return (
                    <Link
                      to={menu.path}
                      onClick={() => handleExit()}
                      key={i}
                      className={s.title}
                    >
                      {menu.title}
                    </Link>
                  );
                }
              })}
              <a href="http://education.kemt.kiev.ua/">Moodle</a>
              <div className={s.search__container}>
                <p className={s.search__title}>Пошук:</p>
                <Select
                  placeholder="Пошук"
                  onChange={pageSelect}
                  options={pages}
                  className={s.search}
                />
              </div>
            </div>
          </div>
          {isOnBurger && (
            <div className={window.innerWidth <= 450 && isOnBurgerChild ? s.dn : s.sub_menu__block}>
              <div className={s.sub_main}>
              <p className={s.title} onClick={()=> homeRoute()}>Головна</p>
                {header[index].children.map((menu, i) => {
                  if (!menu.children.length) {
                    return (
                      <Link
                        to={menu.path}
                        onClick={() => handleExit()}
                        key={i}
                        className={s.title}
                      >
                        {menu.title}
                      </Link>
                    );
                  } else {
                    return (
                      <p
                        className={s.title}
                        key={i}
                        onClick={() => handleChildHover(i)}
                      >
                        {menu.title}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          )}
          {isOnBurgerChild &&
          header[index].children[secondIndex].children.length && (
            <div className={s.child_menu__block}>
              <div className={s.sub_main__child}>
              <p className={s.title} onClick={()=> homeRoute()}>Головна</p>
                {header[index].children[secondIndex].children.map(
                  (menu, i) => (
                    <p
                      onClick={() => childrenClick(menu)}
                      key={i}
                      className={s.title}
                    >
                      {menu.title}
                    </p>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </>
    )
  );
};
