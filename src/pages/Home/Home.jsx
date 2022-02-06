import React from 'react';

import {
  TenderList,
  Sidebar,
} from "@components";
import {APP_TEXT} from "@app/i18n";

import s from './Home.module.scss';

const Home = ({
                homeTenders,
                isLoaded,
                userId,
                user,
                searchValue,
                setSearchValue
              }) => {

  return (
    <div className={s.home__page}>
      <Sidebar user={user}/>
      <TenderList title={APP_TEXT.tenderList.homeTitle}
                  listItems={homeTenders}
                  userId={userId}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  isLoaded={isLoaded}/>
    </div>
  );
}

export default Home;
