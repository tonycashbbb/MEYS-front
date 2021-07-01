import React from 'react';

import {
  TenderList,
  Sidebar,
  Spinner
} from "@components";
import {APP_TEXT} from "@app/i18n";

import s from './Home.module.scss';

const Home = ({
                homeTenders,
                isLoaded,
                userId,
                user
              }) => {
  if (!isLoaded) {
    return <Spinner/>
  }

  return (
    <main className={s.home__page}>
      <Sidebar user={user}/>
      <TenderList title={APP_TEXT.tenderList.homeTitle}
                  listItems={homeTenders}
                  userId={userId}/>
    </main>
  );
}

export default Home;
