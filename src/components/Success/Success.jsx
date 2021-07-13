import React from 'react';
import {connect} from "react-redux";

import {Button} from "@components";
import {AccountPageActions} from '@redux/actions'
import success from '@app/assets/Success-2.gif'
import {APP_TEXT} from "@app/i18n";
import history from "@app/history";

import s from './Success.module.scss'

const Success = ({
                   title,
                   toggleIsSuccess
                 }) => {
  const onGoBack = () => {
    toggleIsSuccess(false)
    history.goBack()
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
          <Button onClick={onGoBack}>{APP_TEXT.success.goBackText}</Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleIsSuccess: (isSuccess) => dispatch(AccountPageActions.toggleIsSuccess(isSuccess))
})

export default connect(null, mapDispatchToProps)(Success);
