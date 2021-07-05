import React from 'react';
import {NavLink} from "react-router-dom";

import {APP_TEXT} from "@app/i18n";

import classes from './Footer.module.scss';

export const Footer = () => {

  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.inner}>
          <ul className={classes.footer__links}>
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
