import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Sidebar from "./Sidebar";
import {selectUser} from "@app/selectors";
import {getLoggedInUser, clearUserData} from "@redux/actions/auth.action";

const SidebarContainer = ({
                            isAccount = false,
                            user,
                            clearUserData,
                            getLoggedInUser
                          }) => {
  useEffect(() => {
    getLoggedInUser()
  }, [])

  return <Sidebar isAccount={isAccount}
                  user={user}/>
};

const mapStateToProps = (state) => ({
  user: selectUser(state),
})

export default connect(mapStateToProps, {getLoggedInUser, clearUserData})(SidebarContainer);
