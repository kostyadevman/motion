import React from 'react';
import Menu from '../../menu/menu';
import Logo from "../../logo/logo";
import {MenuType} from "../../../const";

const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo className="header__logo"/>
          <Menu menuType={MenuType.header}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
