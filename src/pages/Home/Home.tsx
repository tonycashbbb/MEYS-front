import React, {FC} from 'react';

import {
  TenderList,
  Sidebar,
  Spinner
} from "@components";
import {APP_TEXT} from "@app/i18n";
import {Tender, User} from "@app/types";

import s from './Home.module.scss';

type Props = {
  homeTenders: Array<Tender>
  user: User | null
  userId: number | null
  isLoaded: boolean
}

const Home: FC<Props> = ({
                homeTenders,
                isLoaded,
                userId,
                user
              }) => {

  return (
    <div className={s.home__page}>
      <Sidebar user={user}/>
      {!isLoaded
        ? <div style={{width: "70%"}}>
          <Spinner/>
        </div>
        : <TenderList title={APP_TEXT.tenderList.homeTitle}
                      listItems={homeTenders}
                      userId={userId}/>}
    </div>
  );
}

export default Home;
