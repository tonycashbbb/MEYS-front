import React from 'react';
import s from './Home.module.css';
import TenderList from "../../components/TenderList/TenderList";
import Spinner from "../../components/ui/Spinner/Spinner";
import Sidebar from "../../components/Sidebar/Sidebar";

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
