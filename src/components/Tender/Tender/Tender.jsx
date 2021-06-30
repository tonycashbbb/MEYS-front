import React from "react";

import {APP_TEXT} from "@app/i18n";

import s from "./Tender.module.scss";

const Tender = ({
                  tender,
                  contractor
                }) => {
  const createdDate = tender.createdDate.slice(0, 10)
  const createdTime = tender.createdDate.slice(11, 16)

  return (
    <div className={s.tender}>
      <div className={s.header}>
        <div className={s.title}>{tender.name}</div>
        <div className={s.data}>{APP_TEXT.tender.status}: <b>{tender.status}</b></div>
      </div>
      <div className={s.row}>
        <div className={s.column}>
          <h2>{APP_TEXT.tender.tenderInf}</h2>
          <ul className={s.info}>
            <li><span>{APP_TEXT.tender.budget}</span><span>{tender.budget} zl</span></li>
            <li><span>{APP_TEXT.tender.createdDate}</span><span>{createdDate} - {createdTime}</span></li>
            <li><span>{APP_TEXT.tender.contractor}</span><span>{contractor.name}</span></li>
          </ul>
        </div>
        <div className={s.column}>
          <h2>{APP_TEXT.tender.contractorInf}</h2>
          <ul className={s.info}>
            <li><span>{APP_TEXT.generalUser.companyName}</span><span>{contractor.companyName}</span></li>
            <li><span>{APP_TEXT.generalUser.industry}</span><span>{contractor.industry}</span></li>
            <li><span>{APP_TEXT.generalUser.city}</span><span>{contractor.city}</span></li>
          </ul>
        </div>
      </div>
      <div className={s.details}>
        <h2>{APP_TEXT.tender.description}</h2>
        <p>{tender.description}</p>
      </div>
    </div>
  )
}

export default Tender
