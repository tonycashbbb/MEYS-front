import React from 'react';
import s from './TenderRequestList.module.css'
import TenderRequestItemContainer from "../TenderRequestItem/TenderRequestItemContainer";
import Spinner from "../ui/Spinner/Spinner";

const TenderRequestList = ({tenderRequests, tenderStatus}) => {
  const isTenderGoing = tenderStatus === "ONGOING"

  if (!tenderRequests) {
    return <Spinner/>
  }

  return (
    <div className={s.request__list}>
      <h1>Requests:</h1>
      {tenderRequests.length !== 0
        ? <ul>
          {tenderRequests.map(({id, userId, tenderId, message, status}) => <TenderRequestItemContainer key={id}
                                                                                                       tenderRequestId={id}
                                                                                                       tenderId={tenderId}
                                                                                                       requestCreatorId={userId}
                                                                                                       message={message}
                                                                                                       status={status}
                                                                                                       isTenderGoing={isTenderGoing}/>)}
        </ul>
        : <div className={s.no__requests}>There is no requests yet</div>}

    </div>
  );
};

export default TenderRequestList;
