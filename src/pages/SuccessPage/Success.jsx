import React from 'react';
import s from './Success.module.css'
import success from '../../assets/Success-2.gif'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Success = () => {
  const isAuth = useSelector(state => state.auth.isAuth)

  return (
    <div className={"container"}>
      <div className={s.success}>
        <div className={s.img}>
          <img src={success} alt="success"/>
        </div>
        <div className={s.title}>You have done successfully</div>
        <div className={s.back}>
          {isAuth
            ? <NavLink to={'/home'}>Go back to the home page</NavLink>
            : <NavLink to={'/login'}>Go back to the login page</NavLink>}
        </div>
      </div>
    </div>
  );
};

export default Success;
