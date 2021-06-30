import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Sidebar from "./Sidebar";
import {getUser, toggleIsEditing} from "@redux/actions";
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

export default connect(mapStateToProps, {
  getUser,
  toggleIsEditing
})(SidebarContainer);
