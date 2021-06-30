import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import {Button} from "@components";
import {logout} from "@redux/actions/auth.action";
import {APP_TEXT} from "@app/i18n";

import s from './Header.module.css';

const Header = ({isAuth, logout}) => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.logo}>
            <NavLink to="/home"><h2>{APP_TEXT.meys}</h2></NavLink>
          </div>
          <div className={s.navigation}>
            {!isAuth
              ? <div className={s.navigation__item}>
                  <NavLink to={'/login'} activeClassName={s.active}>{APP_TEXT.header.login}</NavLink>
                </div>
              : <Button onClick={logout}>{APP_TEXT.header.logout}</Button>}
          </div>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logout})(Header);
