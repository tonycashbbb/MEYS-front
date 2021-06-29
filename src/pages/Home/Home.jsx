import React from 'react';
import s from './Home.module.css';
import {TenderList, Sidebar} from "@components";
import {Spinner} from "@components/ui";

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
      <TenderList title={"Ongoing tenders"}
                  listItems={homeTenders}
                  userId={userId}/>
    </main>
  );
}

export default Home;
