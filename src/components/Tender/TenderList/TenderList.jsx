import React from "react";
import {NavLink} from "react-router-dom";

import {Button} from "@components";
import {APP_TEXT} from "@app/i18n";

import s from "./TenderList.module.scss";
import {color} from "@app/styles";

const {
  statuses: {FEATURED, ONGOING, CANCELED, ARCHIVED, RETENDER},
  statusButtons: {start, cancel, retender: retenderText}
} = APP_TEXT.tender

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
  const statuses = [ARCHIVED, CANCELED, RETENDER]

  return (
    <div className={s.content}>
      <div className={s.inner}>
        <div className={s.header}>
          <div className={s.header__title}>{title}</div>
          {isAccount &&
          <div className={s.header__subtitle} onClick={toggleIsRepliesShowing}>{APP_TEXT.myRepliesList.title}</div>}
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
                    {tender.status === FEATURED && <Button btnColor={color.GRAY}
                                                           textColor={color.BLACK}
                                                           onClick={() => startTender(tender.id, userId)}>{start}</Button>}
                    {tender.status === ONGOING && <Button btnColor={color.GRAY}
                                                          textColor={color.BLACK}
                                                          onClick={() => cancelTender(tender.id, userId)}>{cancel}</Button>}
                    {statuses.includes(tender.status) && <Button btnColor={color.GRAY}
                                                                 textColor={color.BLACK}
                                                                 onClick={() => retender(tender.id, userId)}>{retenderText}</Button>}
                  </div>
                </div>}
              </li>
            })}
          </ul>
          : <div className={s.noTenders}>
            {APP_TEXT.tenderList.noTenders}
          </div>}
      </div>
    </div>
  )
}

export default TenderList
