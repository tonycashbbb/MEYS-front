import React from 'react';
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import PersonalDataSidebar from "./PersonalDataSidebar";
import CreateSidebar from "./CreateSidebar";
import {Accordion, Spinner} from "@components/ui";
import {APP_TEXT} from "@components/i18n";

const Sidebar = ({
                   isAccount = false,
                   user,
                   toggleIsEditing
                 }) => {
  const {
    logged,
    myProfile,
    personalData
  } = APP_TEXT.sidebar

  if (!user) {
    return <Spinner/>
  }

  return (
    <div className={s.sidebar}>
      <div className={s.inner}>
        <div className={s.block}>
          <div className={s.header}>
            <div className={s.sidebar__title}>{logged}</div>
            <div className={s.username}>{user.name}</div>
          </div>

          {!isAccount
            ? <ul className={s.links}>
              <li><NavLink to="/account">{myProfile}</NavLink></li>
            </ul>
            : <Accordion title={personalData}>
              <PersonalDataSidebar user={user} toggleIsEditing={toggleIsEditing}/>
            </Accordion>}
        </div>

        {isAccount && <CreateSidebar/>}
      </div>
    </div>
  );
};

export default Sidebar;
