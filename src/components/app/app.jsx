import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";
import Header from '../layout/header/header';
import Main from '../main/main';
import PageNotFound from '../page-not-found/page-not-found';
import Footer from "../layout/footer/footer";
import {AppRoute} from '../../const';
import montserratRegular from "../../fonts/montserrat-v21-latin-regular.woff2";
import montserratNormal from "../../fonts/montserrat-v21-latin-500.woff2";
import montserratBold from "../../fonts/montserrat-v21-latin-700.woff2";
import Contacts from "../pages/contacts/contacts";

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <link rel="preload" href={montserratRegular} as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href={montserratNormal} as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href={montserratBold} as="font" type="font/woff2" crossOrigin="anonymous"/>
      </Helmet>
      <Header />
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main>
            <span>ГЛАВНАЯ СТРАНИЦА СКОРЕЕ ВСЕГО "ОБ АКАДЕМИИ"</span>
          </Main>
        </Route>
        <Route exact path={AppRoute.CONTACTS}>
          <Main>
            <Contacts />
          </Main>
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
