import React from 'react';
import s from './Footer.module.css';
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.inner}>
          <ul className={s.footer__links}>
            <h3>MEYS@2020</h3>
            <li><NavLink to={"#"}><h3>Regulations</h3></NavLink></li>
            <li><NavLink to={"#"}><h3>News</h3></NavLink></li>
            <li><NavLink to={"#"}><h3>Cookies policy</h3></NavLink></li>
            <li><NavLink to={"#"}><h3>Privacy</h3></NavLink></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
