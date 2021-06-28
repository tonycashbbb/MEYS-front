import React from 'react';
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import PersonalDataSidebar from "./PersonalDataSidebar";
import CreateSidebar from "./CreateSidebar";
import Accordion from "../ui/Accordion/Accordion";
import Spinner from "../ui/Spinner/Spinner";

const Sidebar = ({
                   isAccount = false,
                   user,
                   toggleIsEditing
                 }) => {

  if (!user) {
    return <Spinner/>
  }

  return (
    <div className={s.sidebar}>
      <div className={s.inner}>
        <div className={s.block}>
          <div className={s.header}>
            <div className={s.sidebar__title}>You are logged as:</div>
            <div className={s.username}> {user.name} </div>
          </div>

          {!isAccount
            ? <ul className={s.links}>
              <li><NavLink to="/account">My profile</NavLink></li>
            </ul>
            : <Accordion title={'Personal Data:'}>
              <PersonalDataSidebar user={user} toggleIsEditing={toggleIsEditing}/>
            </Accordion>}
        </div>

        {isAccount && <CreateSidebar/>}
      </div>
    </div>
  );
};

export default Sidebar;
