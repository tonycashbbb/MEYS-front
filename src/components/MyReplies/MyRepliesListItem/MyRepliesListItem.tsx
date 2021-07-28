import React, {FC} from 'react';
import s from './MyRepliesListItem.module.scss'
import {NavLink} from "react-router-dom";

type Props = {
  tenderId: number
  tenderName: string
  status: string
}

const MyRepliesListItem: FC<Props> = ({
                             tenderId,
                             tenderName,
                             status
                           }) => {

  return <li className={s.reply}>
    <div className={s.tender}>
      <NavLink to={`/account/replies/${tenderId}`}>{tenderName}</NavLink>
    </div>
    <div className={s.status}>
      {status}
    </div>
  </li>
};

export default MyRepliesListItem;
