import React from 'react';
import {connect} from "react-redux";

import Sidebar from "./Sidebar";
import {selectUser} from "@app/selectors";

const SidebarContainer = ({
                            isAccount = false,
                            user,
                            toggleIsEditing
                          }) => {

  return <Sidebar isAccount={isAccount}
                  user={user}
                  toggleIsEditing={toggleIsEditing}/>
};

const mapStateToProps = (state) => ({
  user: selectUser(state),
})

export default connect(mapStateToProps, {})(SidebarContainer);
