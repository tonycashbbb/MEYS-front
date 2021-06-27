import React, {useEffect} from 'react';
import {selectUserId} from "../../redux/selectors/auth-selectors";
import {connect} from "react-redux";
import {getUser, toggleIsEditing} from "../../redux/reducers/accountPage-reducer";
import Sidebar from "./Sidebar";
import {selectAccountUser} from "../../redux/selectors/accountPage-selectors";

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
