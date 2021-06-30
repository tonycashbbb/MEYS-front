import React, {useEffect} from 'react';
import {connect} from "react-redux";

import MyRepliesList from "./MyRepliesList";
import {getMyRepliesList} from "@redux/actions";
import {selectIsLoaded, selectMyRepliesList} from "@app/selectors";

const MyRepliesListContainer = ({
                                  toggleIsRepliesShowing,
                                  getMyRepliesList,
                                  myRepliesList,
                                  isLoaded
                                }) => {

  useEffect(() => {
    getMyRepliesList()
  }, [getMyRepliesList])

  return <MyRepliesList toggleIsRepliesShowing={toggleIsRepliesShowing}
                        myRepliesList={myRepliesList}
                        isLoaded={isLoaded}/>
};

const mapStateToProps = (state) => ({
  myRepliesList: selectMyRepliesList(state),
  isLoaded: selectIsLoaded(state)
})

export default connect(mapStateToProps, {getMyRepliesList})(MyRepliesListContainer);
