import React, {useEffect} from 'react';
import {connect} from "react-redux";

import MyRepliesList from "./MyRepliesList";
import {AccountPageActions} from "@redux/actions";
import {selectIsLoaded, selectMyRepliesList} from "@app/selectors";

const MyRepliesListContainer = ({
                                  toggleIsRepliesShowing,
                                  getMyRepliesList,
                                  clearMyRepliesList,
                                  myRepliesList,
                                  isLoaded
                                }) => {

  useEffect(() => {
    getMyRepliesList()

    return () => clearMyRepliesList()
  }, [clearMyRepliesList, getMyRepliesList])

  return <MyRepliesList toggleIsRepliesShowing={toggleIsRepliesShowing}
                        myRepliesList={myRepliesList}
                        isLoaded={isLoaded}/>
};

const mapStateToProps = (state) => ({
  myRepliesList: selectMyRepliesList(state),
  isLoaded: selectIsLoaded(state)
})

const mapDispatchToProps = (dispatch) => ({
  getMyRepliesList: () => dispatch(AccountPageActions.getMyRepliesList()),
  clearMyRepliesList: () => dispatch(AccountPageActions.setMyRepliesList([])),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyRepliesListContainer);
