import React from 'react';
import s from "./Sidebar.module.scss";
import {NavLink} from "react-router-dom";
import PersonalDataSidebar from "./PersonalDataSidebar";
import CreateSidebar from "./CreateSidebar";
import {Accordion} from "@components";
import {APP_TEXT} from "@app/i18n";

const {
  logged,
  myProfile,
  personalData
} = APP_TEXT.sidebar

const Sidebar = ({
                   isAccount = false,
                   user
                 }) => {

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
              <li><NavLink to="/account/tenders">{myProfile}</NavLink></li>
            </ul>
            : <Accordion title={personalData}>
              <PersonalDataSidebar user={user}/>
            </Accordion>}
        </div>

        {isAccount && <CreateSidebar/>}

        {!isAccount && (
          <div className={s.info}>
            <div className={s.sidebar__title}>Square</div>
            <div className={s.info__text}>To create own tender go to profile page</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
