import React from 'react';
import s from './MyRepliesListItem.module.css'
import {NavLink} from "react-router-dom";

const MyRepliesListItem = ({
                             tenderId,
                             tenderName,
                             status
                           }) => {

  return <li className={s.reply}>
    <div className={s.tender}>
      <NavLink to={`/home/tenders/${tenderId}`}>{tenderName}</NavLink>
    </div>
    <div className={s.status}>
      {status}
    </div>
  </li>
};

export default MyRepliesListItem;
