import React from "react";
import s from "./Spinner.module.css";
import spinner from "../../../assets/Spinner.gif";

const Spinner = () => {
  return (
    <div className={s.spinner}>
      <img src={spinner} alt="spinner"/>
    </div>
  )
}

export default Spinner
