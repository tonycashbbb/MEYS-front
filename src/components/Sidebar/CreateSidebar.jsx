import React from 'react';
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const CreateSidebar = () => {
  return (
    <div className={s.block}>
      <div className={s.header}>
        <div className={s.sidebar__title}>Tender bar</div>
      </div>
      <ul className={s.links}>
        <li><NavLink to="/create_tender">Create tender</NavLink></li>
      </ul>
    </div>
  );
};

export default CreateSidebar;
