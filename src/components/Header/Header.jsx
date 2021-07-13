import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import {Button} from "@components";
import {logout} from "@redux/actions/auth.action";
import {APP_TEXT} from "@app/i18n";

import s from './Header.module.scss';
import {compose} from "redux";

const Header = ({isAuth, logout, ...props}) => {
  const isLogin = ['/login', '/create'].includes(props.location.pathname)

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.logo}>
            <NavLink to="/home/tenders"><h2>{APP_TEXT.meys}</h2></NavLink>
          </div>
          <div className={s.navigation}>
            {!isAuth
              ? <div className={s.navigation__item}>
                {!isLogin && <NavLink to={'/login'}>{APP_TEXT.header.login}</NavLink>}
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

export default compose(
  withRouter,
  connect(mapStateToProps, {logout})
)(Header);
