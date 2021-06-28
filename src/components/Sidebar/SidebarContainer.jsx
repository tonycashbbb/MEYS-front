import React, {useEffect} from 'react';
import {selectUserId} from "../../redux/selectors/auth.selector";
import {connect} from "react-redux";
import {getUser, toggleIsEditing} from "../../redux/actions/accountPage.action";
import Sidebar from "./Sidebar";
import {selectAccountUser} from "../../redux/selectors/accountPage.selector";

const SidebarContainer = ({
                            isAccount,
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
