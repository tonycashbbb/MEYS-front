import React from 'react';

import {
  MyRepliesListContainer,
  MyTendersContainer,
  SidebarContainer
} from "@components";
import {withRedirectToLogin} from "@hoc";
import history from "@app/history";

import s from './Account.module.scss';

const Account = (props) => {
  const isRepliesShowing = props.match.path === "/account/replies"

  const showReplies = () => {
    history.push("/account/replies")
  }

  const showTenders = () => {
    history.push("/account/tenders")
  }

  return (
    <div className={s.account__page}>
      <SidebarContainer isAccount/>
      {!isRepliesShowing && <MyTendersContainer showReplies={showReplies}/>}
      {isRepliesShowing && <MyRepliesListContainer showTenders={showTenders}/>}
    </div>
  );
}

export default withRedirectToLogin(Account);
