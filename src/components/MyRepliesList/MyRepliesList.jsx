import React from 'react';
import s from './MyRepliesList.module.css'
import {MyRepliesListItemContainer} from "@components";
import {Spinner} from "@components/ui";
import {APP_TEXT} from "@components/i18n";

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
