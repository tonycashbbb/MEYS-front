import React from 'react';
import s from './TenderRequestList.module.css'
import {TenderRequestItemContainer} from "@components";
import {Spinner} from "@components/ui";
import {APP_TEXT} from "@components/i18n";

const TenderRequestList = ({tenderRequests, tenderStatus}) => {
  const isTenderGoing = tenderStatus === APP_TEXT.tender.statuses.ONGOING

  if (!tenderRequests) {
    return <Spinner/>
  }

  return (
    <div className={s.request__list}>
      <h1>{APP_TEXT.tender.requests}</h1>
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
        : <div className={s.no__requests}>{APP_TEXT.tender.noRequests}</div>}

    </div>
  );
};

export default TenderRequestList;
