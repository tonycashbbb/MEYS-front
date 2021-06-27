import React, {useState} from 'react';
import s from './Account.module.css';
import MyRepliesListContainer from "../../components/MyRepliesList/MyRepliesListContainer";
import MyTendersContainer from "../../components/MyTenders/MyTendersContainer";
import SidebarContainer from "../../components/Sidebar/SidebarContainer";
import {useSelector} from "react-redux";
import withRedirectToLogin from "../../hoc/withRedirectToLogin";
import {Redirect} from "react-router-dom";

const Account = () => {
  const [isRepliesShowing, setIsRepliesShowing] = useState(false)
  const isEditing = useSelector(state => state.accountPage.isEditing)

  const toggleIsRepliesShowing = () => {
    setIsRepliesShowing(!isRepliesShowing)
  }

  if (isEditing) {
    return <Redirect to={"/account/edit"}/>
  }

  return (
    <div className={s.account__page}>
      <SidebarContainer isAccount/>
      {!isRepliesShowing && <MyTendersContainer toggleIsRepliesShowing={toggleIsRepliesShowing}/>}
      {isRepliesShowing && <MyRepliesListContainer toggleIsRepliesShowing={toggleIsRepliesShowing}/>}
    </div>
  );
}

export default withRedirectToLogin(Account);
