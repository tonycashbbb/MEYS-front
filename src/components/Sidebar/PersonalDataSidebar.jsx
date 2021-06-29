import React from 'react';
import s from "./Sidebar.module.css";
import {Button} from "@components/ui";
import {APP_TEXT} from "@components/i18n";

const {
  email,
  companyName,
  nip,
  industry,
  region,
  city,
} = APP_TEXT.generalUser

const PersonalDataSidebar = ({
                               user,
                               toggleIsEditing
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
          <li><Button onClick={() => toggleIsEditing(true)}>{APP_TEXT.general.edit} {APP_TEXT.general.data}</Button></li>
        </ul>
        : <li>{APP_TEXT.sidebar.noData}</li>}
    </div>
  );
};

export default PersonalDataSidebar;
