import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import success from '@app/assets/Success-2.gif'
import {APP_TEXT} from "@app/i18n";

import s from './Success.module.css'

const Success = () => {
  const isAuth = useSelector(state => state.auth.isAuth)

  return (
    <div className={"container"}>
      <div className={s.success}>
        <div className={s.img}>
          <img src={success} alt={APP_TEXT.success.success}/>
        </div>
        <div className={s.title}>
          {isAuth
            ? APP_TEXT.success.createTenderSuccess
            : APP_TEXT.success.createTenderSuccess}
        </div>
        <div className={s.back}>
          {isAuth
            ? <NavLink to={'/home'}>{APP_TEXT.success.goBackToHome}</NavLink>
            : <NavLink to={'/login'}>{APP_TEXT.success.goBackToLogin}</NavLink>}
        </div>
      </div>
    </div>
  );
};

export default Success;
