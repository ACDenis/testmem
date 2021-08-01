import React, {useEffect, useState} from "react";
import s from "./AdminNews.module.css";
import {connect} from "react-redux";
import {
  deleteNewsAction,
  fetchAllNewsActions,
} from "../../../../store/actions/newsAction";
import {useHistory} from "react-router-dom";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Button from "../../../../misc/Button/Button";
import {fetchAdvAction} from "../../../../store/actions/advAction";
import {deletePartnersAction, fetchPartnersAction} from "../../../../store/actions/partnersAction";
import classNames from "classnames"
import AdminShedule from "../Shedule/AdminShedule";
import Admin from "../../Admin";
import LogoutComponent from "./LogoutComponent";

const AdminNews = ({fetchAllNews, news, deleteNews, fetchAdv, adv, fetchPartners, partners, deletePartners}) => {
  const h = useHistory();
  useEffect(() => {
    fetchAdv();
    fetchAllNews();
    fetchPartners()
  }, [fetchPartners, fetchAllNews, fetchAdv]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div className={s.main__wrapper}>
      <LogoutComponent />
      <Tabs>
        <TabList className={s.tabs}>
          {[
            "Новини",
            "Події",
            "Партнери",
            "Розклад",
            "Редагування сторінок"
          ].map((item, i) => (
            <Tab
              onClick={() => setActiveTabIndex(i)}
              key={item}
              className={classNames(s.tab, {
                [s.tab__active]: activeTabIndex === i,
              })}
            >
              {item}
            </Tab>
          ))}

        </TabList>
        <TabPanel>
          <div className={s.title__container}>
            <h2 className={s.title}>НОВИНИ</h2>
          </div>
          <div className={s.news__container}>
            <Button title="Створити" onClick={() => h.push("/create-news")}/>
            <table className={s.styled__table}>
              <thead>
              <tr>
                <th>Назва</th>
                <th>Опис</th>
                <th>Дата</th>
                <th>Операцї</th>
              </tr>
              </thead>
              {news.length &&
              news.map((q) => {
                return (
                  <tbody>
                  <tr className={s.active__row}>
                    <td>{q.title || "Err"}</td>
                    <td>{q.desc.slice(0, 50) + "..." || "Err"}</td>
                    <td>{q.updatedAt.slice(0, 10) || "Date"}</td>
                    <div className={s.table__fl}>
                      <button
                        className={s.del}
                        onClick={() => h.push(`/edit-news/${q._id}`)}
                      >
                        Редагувати
                      </button>
                      <button onClick={() => deleteNews(q._id)} className={s.delete__btn}>Видалити</button>
                    </div>
                  </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.title__container}>
            <h2 className={s.title}>Події</h2>
          </div>
          <div className={s.news__container}>
            <Button title="Створити" onClick={() => h.push("/create-news")}/>
            <table className={s.styled__table}>
              <thead>
              <tr>
                <th>Назва</th>
                <th>Опис</th>
                <th>Дата</th>
                <th>Операцї</th>
              </tr>
              </thead>
              {adv.length > 0 &&
              adv.map((q) => {
                return (
                  <tbody>
                  <tr className={s.active__row}>
                    <td>{q.title || "Err"}</td>
                    <td>{q.desc.slice(0, 50) + "..." || "Err"}</td>
                    <td>{q.updatedAt.slice(0, 10) || "Date"}</td>
                    <div className={s.table__fl}>
                      <button
                        className={s.del}
                        onClick={() => h.push(`/edit-news/${q._id}`)}
                      >
                        Редагувати
                      </button>
                      <button onClick={() => deleteNews(q._id)} className={s.delete__btn}>Видалити</button>
                    </div>
                  </tr>
                  </tbody>
                );
              })}
            </table>

          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.title__container}>
            <h2 className={s.title}>Події</h2>
          </div>
          <div className={s.news__container}>
            <Button title="Створити" onClick={() => h.push("/create-partners")}/>
            <table className={s.styled__table}>
              <thead>
              <tr>
                <th>Назва</th>
                <th>Опис</th>
                <th>Дата</th>
                <th>Операцї</th>
              </tr>
              </thead>
              {partners.length &&
              partners.map((q) => {
                return (
                  <tbody>
                  <tr className={s.active__row}>
                    <td>{q.title || "Err"}</td>
                    <td>{q.url.slice(0, 50) + "..." || "Err"}</td>
                    <td>{q.updatedAt.slice(0, 10) || "Date"}</td>
                    <div className={s.table__fl}>
                      <button
                        className={s.del}
                        onClick={() => h.push(`/edit-partners/${q._id}`)}
                      >
                        Редагувати
                      </button>
                      <button onClick={() => deletePartners(q._id)} className={s.delete__btn}>Видалити</button>
                    </div>
                  </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.title__container}>
            <h2 className={s.title}>Розклад</h2>
          </div>
          <div className={s.news__container}>
            <AdminShedule/>
          </div>
        </TabPanel>
        <TabPanel><Admin/></TabPanel>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => ({
  news: state.news.news,
  adv: state.adv.adv,
  partners: state.partners.partners
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllNews: () => dispatch(fetchAllNewsActions()),
  fetchAdv: () => dispatch(fetchAdvAction()),
  fetchPartners: () => dispatch(fetchPartnersAction()),
  deleteNews: (data) => dispatch(deleteNewsAction(data)),
  deletePartners: (data) => dispatch(deletePartnersAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminNews);
