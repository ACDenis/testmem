import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Footer from "./misc/Footer/Footer";
import Header from "./misc/Header/Header";
import NotFound from "./pages/404/404";
import Admin from "./pages/Admin/Admin";
import CreateNews from "./pages/Admin/pages/CreateNews/CreateNews";
import CreatePartners from "./pages/Admin/pages/CreatePartners/CreatePartners";
import EditNews from "./pages/Admin/pages/EditNews/EditNews";
import EditPartners from "./pages/Admin/pages/EditPartners/EditPartners";
import AdminNews from "./pages/Admin/pages/News/AdminNews";
import AdminShedule from "./pages/Admin/pages/Shedule/AdminShedule";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Lessons from "./pages/Lessons/Lessons";
import News from "./pages/News/News";
import PageComponent from "./pages/PageComponent/PageComponent";
import PartnersPage from "./pages/PartnersPage/PartnersPage";
import SingleNews from "./pages/SingleNews/SingleNews";
import { getToken } from "./utils/utils";
import { connect } from "react-redux";
import Cycles from "./pages/Cycles/Cycles";
import Viddtilennya from "./pages/Cycles/Viddilennya";

function App({ token }) {
  if (token?.length < 1) {
    token = getToken();
  }

  const PrivateRoute = ({
    redirectTo,
    component: Component,
    condition,
    state = {},
    ...rest
  }) => (
    <Route {...rest}>
      {condition ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: redirectTo, state }} />
      )}
    </Route>
  );
  // const token = getToken()

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact isHeader="false" />
        <Route path="/login" component={Auth} />
        <Route path="/single-news/:id" component={SingleNews} />
        <Route path="/news" component={News} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/about">
          <PageComponent pageTitle="Про коледж" />
        </Route>
        <Route path="/specialities">
          <PageComponent pageTitle="Спеціальності" />
        </Route>
        <Route path="/asy">
          <PageComponent pageTitle="Відділення АСУ" />
        </Route>
        <Route path="/ep">
          <PageComponent pageTitle="Відділення ЕЛ" />
        </Route>
        <Route path="/et">
          <PageComponent pageTitle="Відділення ЕТ" />
        </Route>
        <Route path="/ez">
          <PageComponent pageTitle="Відділення ЕЗ" />
        </Route>
        <Route path="/bakalavr">
          <PageComponent pageTitle="Відділення бакалаврату" />
        </Route>
        <Route path="/zaoch">
          <PageComponent pageTitle="Заочне відділення" />
        </Route>
        <Route path="/leadership">
          <PageComponent pageTitle="Адміністрація" />
        </Route>
        <Route path="/college">
          <PageComponent pageTitle="КИЇВСЬКИЙ ЕЛЕКТРОМЕХАНІЧНИЙ ФАХОВИЙ КОЛЕДЖ" />
        </Route>
        <Route path="/library">
          <PageComponent pageTitle="Бібліотека" />
        </Route>
        <Route path="/hierarchy">
          <PageComponent pageTitle="Ієрархія" />
        </Route>
        <Route path="/elektropostach">
          <PageComponent pageTitle="Цикл дисциплін професійної та практичної підготовки за освітньою програмою «Електропостачання»" />
        </Route>
        <Route path="/montaz">
          <PageComponent pageTitle="Цикл дисциплін професійної та практичної підготовки за освітньою програмою «Монтаж oбслуговування та ремонт автоматизованих систем керування рухом на залізничному транспорті»" />
        </Route>
        <Route path="/teh-obslyga">
          <PageComponent pageTitle="Цикл дисциплін професійної та практичної підготовки за освітньою програмою «Технічне обслуговування pемонт та експлуатація тягового рухомого складу»" />
        </Route>
        <Route path="/radioteh">
          <PageComponent pageTitle="Цикл дисциплін професійної та практичної підготовки «Експлуатація радіотехнічних систем та пристроїв»" />
        </Route>
        <Route path="/cukl-ez">
          <PageComponent pageTitle="Цикл дисциплін професійної та практичної підготовки та ремонт пристроїв електрозв’язку на транспорті" />
        </Route>
        <Route path="/ki">
          <PageComponent pageTitle="Цикл дисциплін професійної та практичної підготовки спеціальності Комп'ютерна інженерія»" />
        </Route>
        <Route path="/tech-duscupilinu">
          <PageComponent pageTitle="Цикл загально-технічних дисциплін" />
        </Route>
        <Route path="/filolog">
          <PageComponent pageTitle="Цикл філологічних дисциплін" />
        </Route>
        <Route path="/susup-duscupilinu">
          <PageComponent pageTitle="Цикл ссуспільно-економічних дисциплін" />
        </Route>
        <Route path="/viddil-kadriv">
          <PageComponent pageTitle="Відділ кадрів" />
        </Route>
        <Route path="/kancelaria">
          <PageComponent pageTitle="Канелярія" />
        </Route>
        <Route path="/buhalteria">
          <PageComponent pageTitle="Бухгалтерія" />
        </Route>
        <Route path="/hosp-chastuna">
          <PageComponent pageTitle="Адміністративно-господарча частина" />
        </Route>
        <Route path="/science-method-rada">
          <PageComponent pageTitle="Науково методична рада" />
        </Route>
        <Route path="/pedagog-rada">
          <PageComponent pageTitle="Педагогічна рада" />
        </Route>
        <Route path="/prof-commitet">
          <PageComponent pageTitle="Профспілковий комітет" />
        </Route>
        <Route path="/normativ-docs">
          <PageComponent pageTitle="Нормативні документи коледжу" />
        </Route>
        <Route path="/system-quality">
          <PageComponent pageTitle="Система менеджменту якості" />
        </Route>
        <Route path="/science-dilnist">
          <PageComponent pageTitle="Наукова міжнародна діяльність" />
        </Route>
        <Route path="/public-info">
          <PageComponent pageTitle="Публічна інформація" />
        </Route>
        <Route path="/academ-dobrches">
          <PageComponent pageTitle="Академічна доброчесність" />
        </Route>
        <Route path="/actual-info">
          <PageComponent pageTitle="Актуальна інформація" />
        </Route>
        <Route path="/cost">
          <PageComponent pageTitle="Вартість навчання" />
        </Route>
        <Route path="/rules">
          <PageComponent pageTitle="Умови вступу" />
        </Route>
        <Route path="/courses">
          <PageComponent pageTitle="Підготовчі курси" />
        </Route>
        <Route path="/dormitories">
          <PageComponent pageTitle="Гуртожитки" />
        </Route>
        <Route path="/student-municipality">
          <PageComponent pageTitle="Студентське самоврядування" />
        </Route>
        <Route path="/scholarship">
          <PageComponent pageTitle="Стипендія" />
        </Route>
        <Route path="/employment">
          <PageComponent pageTitle="Працевлаштування" />
        </Route>
        <Route path="/educational-program">
          <PageComponent pageTitle="Освітні програми" />
        </Route>
        <Route path="/dual-education">
          <PageComponent pageTitle="Дуальна освіта" />
        </Route>
        <Route path="/achievement">
          <PageComponent pageTitle="Досягнення" />
        </Route>
        <Route path="/culture">
          <PageComponent pageTitle="Культура" />
        </Route>
        <Route path="/sport">
          <PageComponent pageTitle="Спорт" />
        </Route>
        <Route path="/relax_zone">
          <PageComponent pageTitle="Зони відпочинку" />
        </Route>
        <Route path="/life_after_college">
          <PageComponent pageTitle="Життя поза коледжем" />
        </Route>
        <Route path="/certificate">
          <PageComponent pageTitle="Свідоцтва" />
        </Route>
        <Route path="/all-courses">
          <PageComponent pageTitle="Перелік курсів" />
        </Route>
        <Route path="/filolog">
        <PageComponent pageTitle="Цикл філологічних дисциплін" />
        </Route>
        <Route path="/cycles" component={Cycles} />
        <Route path="/viddtilennya" component={Viddtilennya} />

        <PrivateRoute
          path="/admin"
          condition={token}
          component={Admin}
          redirectTo="/login"
          exact
        />
        <PrivateRoute
          path="/edit-news/:id"
          condition={token}
          component={EditNews}
          redirectTo="/login"
          exact
        />
        <PrivateRoute
          path="/partners"
          condition={token}
          component={PartnersPage}
          redirectTo="/login"
          exact
        />
        <PrivateRoute
          path="/create-news"
          condition={token}
          component={CreateNews}
          redirectTo="/login"
          exact
        />
        <PrivateRoute
          path="/admin-shadule"
          condition={token}
          component={AdminShedule}
          redirectTo="/login"
          exact
        />
        <PrivateRoute
          path="/create-partners"
          condition={token}
          component={CreatePartners}
          redirectTo="/login"
          exact
        />
        <PrivateRoute
          path="/edit-partners/:id"
          condition={token}
          component={EditPartners}
          redirectTo="/login"
          exact
        />
        <PrivateRoute
          path="/admin-news"
          condition={token}
          component={AdminNews}
          redirectTo="/login"
          exact
        />
        <Route path="/*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return { token: state.login.token };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
