import React from 'react';
import {NavLink} from "react-router-dom";

import {APP_TEXT} from "@app/i18n";

import s from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.inner}>
          <ul className={s.footer__links}>
            <h3>{APP_TEXT.meys}@2020</h3>
            <li><NavLink to={"#"}><h3>{APP_TEXT.footer.regulations}</h3></NavLink></li>
            <li><NavLink to={"#"}><h3>{APP_TEXT.footer.news}</h3></NavLink></li>
            <li><NavLink to={"#"}><h3>{APP_TEXT.footer.cookies}</h3></NavLink></li>
            <li><NavLink to={"#"}><h3>{APP_TEXT.footer.privacy}</h3></NavLink></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
