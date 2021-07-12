import React, {useState} from 'react';

import {
  MyRepliesListContainer,
  MyTendersContainer,
  SidebarContainer
} from "@components";
import {withRedirectToLogin} from "@hoc";

import s from './Account.module.scss';

const Account = () => {
  const [isRepliesShowing, setIsRepliesShowing] = useState(false)

  const toggleIsRepliesShowing = () => {
    setIsRepliesShowing(!isRepliesShowing)
  }

  return (
    <div className={s.account__page}>
      <SidebarContainer isAccount/>
      {!isRepliesShowing && <MyTendersContainer toggleIsRepliesShowing={toggleIsRepliesShowing}/>}
      {isRepliesShowing && <MyRepliesListContainer toggleIsRepliesShowing={toggleIsRepliesShowing}/>}
    </div>
  );
}

export default withRedirectToLogin(Account);
