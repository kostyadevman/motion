import React from 'react';
import Menu from '../../menu/menu';
import Logo from "../../logo/logo";
import {MenuType} from "../../../const";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title visually-hidden">Подвал</h2>
      <div className="container">
        <div className="footer__wrapper">
          <Logo className="footer__logo" />
          <Menu menuType={MenuType.footer}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
