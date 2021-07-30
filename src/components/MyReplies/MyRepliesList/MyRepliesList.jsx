import React from 'react';

import {MyRepliesListItemContainer, Spinner} from "@components";
import {APP_TEXT} from "@app/i18n";

import s from './MyRepliesList.module.scss'

const MyRepliesList = ({
                         showTenders,
                         myRepliesList
                       }) => {

  if (!myRepliesList) {
    return <div style={{width: "70%"}}>
      <Spinner/>
    </div>
  }

  return (
    <div className={s.replies}>
      <div className={s.header}>
        <div className={s.subtitle} onClick={showTenders}>{APP_TEXT.tenderList.accountTitle}</div>
        <div className={s.title}>{APP_TEXT.myRepliesList.title}</div>
      </div>

      <ul className={s.list}>
        {myRepliesList.length !== 0
        && myRepliesList.map(({id, tenderId, status}) => <MyRepliesListItemContainer key={id}
                                                                                     tenderId={tenderId}
                                                                                     status={status}/>)}
        {myRepliesList.length === 0 && <div className={s.no__replies}>{APP_TEXT.myRepliesList.noReplies}</div>}
      </ul>
    </div>
  );
};

export default MyRepliesList;
