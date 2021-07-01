import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Sidebar from "./Sidebar";
import {AccountPageActions} from "@redux/actions";
import {selectUserId, selectAccountUser} from "@app/selectors";

const SidebarContainer = ({
                            isAccount = false,
                            userId,
                            user,
                            getUser,
                            toggleIsEditing
                          }) => {
  useEffect(() => {
    getUser(userId)
  }, [getUser, userId])

  return <Sidebar isAccount={isAccount}
                  user={user}
                  toggleIsEditing={toggleIsEditing}/>
};

const mapStateToProps = (state) => ({
  userId: selectUserId(state),
  user: selectAccountUser(state),
})

const mapDispatchToProps = (dispatch) => ({
  getUser: (userId) => dispatch(AccountPageActions.getUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
