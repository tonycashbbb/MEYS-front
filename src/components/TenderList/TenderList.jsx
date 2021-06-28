import React from "react";
import s from "./TenderList.module.css";
import {NavLink} from "react-router-dom";
import {Button} from "@components/ui";

const TenderList = ({
                      listItems,
                      title,
                      isAccount = false,
                      startTender,
                      cancelTender,
                      retender,
                      userId,
                      toggleIsRepliesShowing
                    }) => {
  const statuses = ["RETENDER", "CANCELED", "ARCHIVED"]

  return (
    <div className={s.content}>
      <div className={s.inner}>
        <div className={s.header}>
          <div className={s.header__title}>{title}</div>
          {isAccount && <div className={s.header__subtitle} onClick={toggleIsRepliesShowing}>My replies</div>}
        </div>

        {listItems.length !== 0
          ? <ul className={s.list}>
            {listItems.map((tender) => {
              return <li key={tender.id}>
                <div className={s.left}>
                  <div className={s.list__title}>
                    {tender.contractorId === userId
                      ? <NavLink to={`/account/tenders/${tender.id}`}>{tender.name}</NavLink>
                      : <NavLink to={`/home/tenders/${tender.id}`}>{tender.name}</NavLink>}
                  </div>
                  {isAccount && <div className={s.subtitle}>{tender.status}</div>}
                  {!isAccount && <div className={s.description}><p>{tender.description}</p></div>}
                </div>
                {isAccount && <div className={s.right}>
                  <div className={s.startBtn}>
                    {tender.status === "FEATURED" && <Button btnColor={"#F4F4F4"}
                                                             textColor={"#000"}
                                                             onClick={() => startTender(tender.id, userId)}>Start</Button>}
                    {tender.status === "ONGOING" && <Button btnColor={"#F4F4F4"}
                                                            textColor={"#000"}
                                                            onClick={() => cancelTender(tender.id, userId)}>Cancel</Button>}
                    {statuses.includes(tender.status) && <Button btnColor={"#F4F4F4"}
                                                                 textColor={"#000"}
                                                                 onClick={() => retender(tender.id, userId)}>Retender</Button>}
                  </div>
                </div>}
              </li>
            })}
          </ul>
          : <div className={s.noTenders}>
            No tenders yet
          </div>}
      </div>
    </div>
  )
}

export default TenderList
