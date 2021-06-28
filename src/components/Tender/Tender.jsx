import React from "react";
import s from "./Tender.module.css";

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
        <div className={s.data}>Status: <b>{tender.status}</b></div>
      </div>
      <div className={s.row}>
        <div className={s.column}>
          <h2>Information about tender:</h2>
          <ul className={s.info}>
            <li><span>Budget</span><span>{tender.budget} zl</span></li>
            <li><span>Created date</span><span>{createdDate} - {createdTime}</span></li>
            <li><span>Contractor</span><span>{contractor.name}</span></li>
          </ul>
        </div>
        <div className={s.column}>
          <h2>Information about contractor:</h2>
          <ul className={s.info}>
            <li><span>Company name</span><span>{contractor.companyName}</span></li>
            <li><span>Industry</span><span>{contractor.industry}</span></li>
            <li><span>City</span><span>{contractor.city}</span></li>
          </ul>
        </div>
      </div>
      <div className={s.details}>
        <h2>Description:</h2>
        <p>{tender.description}</p>
      </div>
    </div>
  )
}

export default Tender
