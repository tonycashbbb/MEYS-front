import React from 'react';

import {APP_TEXT} from "@app/i18n";

import s from "./Sidebar.module.scss";
import {Button} from "@components";
import history from "@app/history";

const {
  email,
  companyName,
  nip,
  industry,
  region,
  city,
} = APP_TEXT.generalUser

const PersonalDataSidebar = ({
                               user
                             }) => {

  return (
    <div className={s.personal__data}>
      {user
        ? <ul className={s.company__list}>
          <li><span>{email}:</span> {user.email}</li>
          <li><span>{companyName}:</span> {user.companyName}</li>
          <li><span>{industry}:</span> {user.industry}</li>
          <li><span>{nip}:</span> {user.nip}</li>
          <li><span>{city}:</span> {user.city}</li>
          <li><span>{region}:</span> {user.region}</li>
          <li><Button onClick={() => history.push('/account/edit')}>Edit</Button></li>
        </ul>
        : <li>{APP_TEXT.sidebar.noData}</li>}
    </div>
  );
};

export default PersonalDataSidebar;
