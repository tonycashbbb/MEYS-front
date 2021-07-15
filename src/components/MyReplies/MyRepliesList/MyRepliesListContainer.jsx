import React, {useEffect} from 'react';
import {connect} from "react-redux";

import MyRepliesList from "./MyRepliesList";
import {AccountPageActions} from "@redux/actions";
import {selectIsLoaded, selectMyRepliesList, selectUserId} from "@app/selectors";

const MyRepliesListContainer = ({
                                  userId,
                                  clearUser,
                                  showTenders,
                                  getMyRepliesList,
                                  clearMyRepliesList,
                                  myRepliesList,
                                  isLoaded
                                }) => {
  useEffect(() => {
    getMyRepliesList(userId)

    return () => {
      clearMyRepliesList()
      clearUser()
    }
  }, [userId, clearUser, clearMyRepliesList, getMyRepliesList])

  return <MyRepliesList showTenders={showTenders}
                        myRepliesList={myRepliesList}
                        isLoaded={isLoaded}/>
};

const mapStateToProps = (state) => ({
  userId: selectUserId(state),
  myRepliesList: selectMyRepliesList(state),
  isLoaded: selectIsLoaded(state)
})

const mapDispatchToProps = (dispatch) => ({
  clearUser: () => dispatch(AccountPageActions.setUser(null)),
  getMyRepliesList: (userId) => dispatch(AccountPageActions.getMyRepliesList(userId)),
  clearMyRepliesList: () => dispatch(AccountPageActions.setMyRepliesList(null)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyRepliesListContainer);
