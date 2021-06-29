import React from 'react';
import s from './TenderRequestItem.module.css'
import {Button} from "@components/ui";
import {APP_TEXT} from "@components/i18n";

const TenderRequestItem = ({
                             requestCreatorName,
                             status,
                             message,
                             isTenderGoing,
                             acceptTender,
                           }) => {

  return (
    <li className={s.request}>
      <div>
        <div className={s.name}>{requestCreatorName}</div>
        <div className={s.status}>{APP_TEXT.tender.requestStatus}: <b>{status}</b></div>
        <div className={s.description}>{message}</div>
      </div>
      <div>
        {isTenderGoing && <Button onClick={acceptTender}>{APP_TEXT.general.accept}</Button>}
      </div>
    </li>
  );
};

export default TenderRequestItem
