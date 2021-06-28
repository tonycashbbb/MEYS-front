import React from 'react';
import s from "./Sidebar.module.css";
import {Button} from "@components/ui";

const PersonalDataSidebar = ({
                               user,
                               toggleIsEditing
                             }) => {

  return (
    <div className={s.personal__data}>
      {user
        ? <ul className={s.company__list}>
          <li><span>Email:</span> {user.email}</li>
          <li><span>Company:</span> {user.companyName}</li>
          <li><span>Industry:</span> {user.industry}</li>
          <li><span>NIP:</span> {user.nip}</li>
          <li><span>City:</span> {user.city}</li>
          <li><span>Region:</span> {user.region}</li>
          <li><Button onClick={() => toggleIsEditing(true)}>Edit data</Button></li>
        </ul>
        : <li>no data about company</li>}
    </div>
  );
};

export default PersonalDataSidebar;
