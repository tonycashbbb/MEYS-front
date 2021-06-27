import React from 'react';
import s from './MyRepliesList.module.css'
import MyRepliesListItemContainer from "../MyRepliesListItem/MyRepliesListItemContainer";
import Spinner from "../ui/Spinner/Spinner";

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
        <div className={s.subtitle} onClick={toggleIsRepliesShowing}>My tenders</div>
        <div className={s.title}>My replies</div>
      </div>

      <ul className={s.list}>
        {myRepliesList.length !== 0
        && myRepliesList.map(({id, tenderId, status}) => <MyRepliesListItemContainer key={id}
                                                                                     tenderId={tenderId}
                                                                                     status={status}/>)}
        {myRepliesList.length === 0 && <div className={s.no__replies}>No replies yet</div>}
      </ul>
    </div>
  );
};

export default MyRepliesList;
