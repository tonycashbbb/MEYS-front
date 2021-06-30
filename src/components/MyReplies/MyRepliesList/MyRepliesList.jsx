import React from 'react';

import {MyRepliesListItemContainer, Spinner} from "@components";
import {APP_TEXT} from "@app/i18n";

import s from './MyRepliesList.module.css'

const MyRepliesList = ({
                         toggleIsRepliesShowing,
                         myRepliesList
                       }) => {

  if (!myRepliesList) {
    return <Spinner/>
  }

  return (
    <div className={s.replies}>
      <div className={s.header}>
        <div className={s.subtitle} onClick={toggleIsRepliesShowing}>{APP_TEXT.tenderList.accountTitle}</div>
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