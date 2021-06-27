import React from 'react';
import s from './TenderRequestItem.module.css'
import Button from "../ui/Button/Button";

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
        <div className={s.status}>Request status: <b>{status}</b></div>
        <div className={s.description}>{message}</div>
      </div>
      <div>
        {isTenderGoing && <Button onClick={acceptTender}>Accept</Button>}
      </div>
    </li>
  );
};

export default TenderRequestItem
