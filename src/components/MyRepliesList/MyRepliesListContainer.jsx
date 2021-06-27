import React, {useEffect} from 'react';
import {connect} from "react-redux";
import MyRepliesList from "./MyRepliesList";
import {getMyRepliesList} from "../../redux/reducers/accountPage-reducer";
import {selectIsLoaded, selectMyRepliesList} from "../../redux/selectors/accountPage-selectors";

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
