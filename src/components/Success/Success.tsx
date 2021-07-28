import React, {FC} from 'react';
import {connect} from "react-redux";

import {Button} from "@components";
import {AppActions} from '@redux/actions'
import success from '@app/assets/Success-2.gif'
import {APP_TEXT} from "@app/i18n";
import {ROUTER_CONFIG} from "@app/utils/config";
import history from "@app/history";

import s from './Success.module.scss'

type Props = {
  text: {
    title: string
    buttonText: string
  }
  toggleIsSuccess: (isSuccess: boolean) => void
  tenderId?: number
}

const Success: FC<Props> = ({
                   text,
                   toggleIsSuccess,
                   tenderId
                 }) => {
  const historyPage = {
    "loginPage": ROUTER_CONFIG.AUTH.LOGIN,
    "homePage": `${ROUTER_CONFIG.HOME.BASE}`,
    "accountTenderPage": `${ROUTER_CONFIG.ACCOUNT.BASE}/${tenderId}`,
    "accountPage": ROUTER_CONFIG.ACCOUNT.BASE,
  }

  const onBackHome = () => {
    toggleIsSuccess(false)
    // @ts-ignore
    history.push(historyPage[text.historyPage])
  }

  return (
    <div className={"container"}>
      <div className={s.success}>
        <div className={s.img}>
          <img src={success} alt={APP_TEXT.success.successAlt}/>
        </div>
        <div className={s.title}>
          {text.title}
        </div>
        <div className={s.back}>
          <Button onClick={onBackHome}>{text.buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleIsSuccess: (isSuccess: boolean) => dispatch(AppActions.toggleIsSuccess(isSuccess))
})

export default connect(null, mapDispatchToProps)(Success);
