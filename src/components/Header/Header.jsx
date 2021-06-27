import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import Button from "../ui/Button/Button";
import {logout} from "../../redux/reducers/auth-reducer";

const Header = ({isAuth, logout}) => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.logo}>
            <NavLink to="/home"><h2>MEYS</h2></NavLink>
          </div>
          <div className={s.navigation}>
            {!isAuth
              ? <div className={s.navigation__item}>
                  <NavLink to={'/login'} activeClassName={s.active}>Log in</NavLink>
                </div>
              : <Button onClick={logout}>Log out</Button>}
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
