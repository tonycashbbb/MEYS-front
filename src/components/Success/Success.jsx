import React from 'react';
import {connect} from "react-redux";

import {Button} from "@components";
import {AccountPageActions} from '@redux/actions'
import success from '@app/assets/Success-2.gif'
import {APP_TEXT} from "@app/i18n";
import {ROUTER_CONFIG} from "@app/utils/config";
import history from "@app/history";

import s from './Success.module.scss'

const Success = ({
                   title,
                   toggleIsSuccess
                 }) => {
  const onBackHome = () => {
    toggleIsSuccess(false)
    history.push(ROUTER_CONFIG.HOME.BASE)
  }

  return (
    <div className={"container"}>
      <div className={s.success}>
        <div className={s.img}>
          <img src={success} alt={APP_TEXT.success.successAlt}/>
        </div>
        <div className={s.title}>
          {title}
        </div>
        <div className={s.back}>
          <Button onClick={onBackHome}>{APP_TEXT.success.backHome}</Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleIsSuccess: (isSuccess) => dispatch(AccountPageActions.toggleIsSuccess(isSuccess))
})

export default connect(null, mapDispatchToProps)(Success);
