import React from 'react'
import s from "./ContractsItem.module.css";

const ContractsItem = (props) => {

  const { title, text } = props;

  return (
    <div className={s.item}>
      <div className={s.title}>
        {title}
      </div>
      <div className={s.text}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ContractsItem