import React, {FC} from 'react';

import {Spinner} from "@components";
import { MyRepliesListItemContainer } from '@app/containers';
import {APP_TEXT} from "@app/i18n";
import {TenderRequest} from "@app/types";

import s from './MyRepliesList.module.scss'

type Props = {
  showTenders: () => void
  myRepliesList: Array<TenderRequest> | null
}

const MyRepliesList: FC<Props> = ({
                                    showTenders,
                                    myRepliesList
                                  }) => {
  if (!myRepliesList) {
    return <Spinner/>
  }

  return (
    <div className={s.replies}>
      <div className={s.header}>
        <div className={s.subtitle} onClick={showTenders}>{APP_TEXT.tenderList.accountTitle}</div>
        <div className={s.title}>{APP_TEXT.myRepliesList.title}</div>
      </div>

      <ul className={s.list}>
        {myRepliesList.length !== 0 && myRepliesList.map(({id, tenderId, status}) => (
          <MyRepliesListItemContainer key={id}
                                      tenderId={tenderId}
                                      status={status}/>
          ))}
        {myRepliesList.length === 0 && <div className={s.no__replies}>{APP_TEXT.myRepliesList.noReplies}</div>}
      </ul>
    </div>
  );
};

export default MyRepliesList;
