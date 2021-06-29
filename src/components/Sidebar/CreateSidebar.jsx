import React from 'react';
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import {APP_TEXT} from "@components/i18n";

const CreateSidebar = () => {
  return (
    <div className={s.block}>
      <div className={s.header}>
        <div className={s.sidebar__title}>{APP_TEXT.sidebar.tenderBar}</div>
      </div>
      <ul className={s.links}>
        <li><NavLink to="/create_tender">{APP_TEXT.sidebar.createTender}</NavLink></li>
      </ul>
    </div>
  );
};

export default CreateSidebar;
