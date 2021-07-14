import React from 'react';

import {Button} from "@components";
import {APP_TEXT} from "@app/i18n";
import {constants} from "@app/constants";
import history from '@app/history'
import {getQueryParam} from "@app/utils/helpers";

import s from './error.module.scss'

const IMAGE_NAME = {
  [constants.ERROR_TYPE.UNEXPECTED]: 'errorPage',
  [constants.ERROR_TYPE.NOT_FOUND]: 'errorPage_404',
  [constants.ERROR_TYPE.ACCESS_FORBIDDEN]: 'errorPage_403',
};

const Error = () => {
  const errorType = getQueryParam('type', window.location) || constants.ERROR_TYPE.UNEXPECTED

  const onBackLogin = () => {
    history.push("/login")
  }

  const onBackHome = () => {
    history.push("/home/tenders")
  }

  const imgPath = require(`../../assets/${IMAGE_NAME[errorType]}.svg`).default

  return (
    <div className="container">
      <div className={s.inner}>
        <div className={s.image}>
          <img src={imgPath} alt="error img"/>
        </div>
        <h1 className={s.title}>{APP_TEXT.error[errorType].title}</h1>
        <div className={s.description}>
          {APP_TEXT.error[errorType].description}
        </div>
        {errorType === constants.ERROR_TYPE.UNAUTHORIZED
          ? <Button onClick={onBackLogin}>{APP_TEXT.error.backHome}</Button>
          : <Button onClick={onBackHome}>{APP_TEXT.error.backHome}</Button>}
      </div>
    </div>
  );
};

export default Error;