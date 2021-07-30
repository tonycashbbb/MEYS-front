import React, {useEffect} from 'react';
import {connect} from "react-redux";

import MyRepliesList from "./MyRepliesList";
import {AccountActions} from "@redux/actions";
import {selectIsLoaded, selectMyRepliesList, selectUserId} from "@app/selectors";

const MyRepliesListContainer = ({
                                  userId,
                                  clearUserId,
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
      clearUserId()
    }
  }, [userId, clearUserId, clearMyRepliesList, getMyRepliesList])

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
  clearUserId: () => dispatch(AccountActions.setUserId(null)),
  getMyRepliesList: (userId) => dispatch(AccountActions.getMyRepliesList(userId)),
  clearMyRepliesList: () => dispatch(AccountActions.setMyRepliesList(null)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyRepliesListContainer);
