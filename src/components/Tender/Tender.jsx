import React from "react";
import s from "./Tender.module.css";

const Tender = ({
                  tenderName,
                  status,
                  budget,
                  yyyy_mm_dd,
                  time,
                  description,
                  contractorName,
                  companyName,
                  industry,
                  city,
                }) => {

  return (
    <div className={s.tender}>
      <div className={s.header}>
        <div className={s.title}>{tenderName}</div>
        <div className={s.data}>Status: <b>{status}</b></div>
      </div>
      <div className={s.row}>
        <div className={s.column}>
          <h2>Information about tender:</h2>
          <ul className={s.info}>
            <li><span>Budget</span><span>{budget} zl</span></li>
            <li><span>Created date</span><span>{yyyy_mm_dd} - {time}</span></li>
            <li><span>Contractor</span><span>{contractorName}</span></li>
          </ul>
        </div>
        <div className={s.column}>
          <h2>Information about contractor:</h2>
          <ul className={s.info}>
            <li><span>Company name</span><span>{companyName}</span></li>
            <li><span>Industry</span><span>{industry}</span></li>
            <li><span>City</span><span>{city}</span></li>
          </ul>
        </div>
      </div>
      <div className={s.details}>
        <h2>Description:</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Tender
