import React, {useEffect} from 'react';
import Home from "./Home";
import {connect} from "react-redux";
import {getHomeTenders} from "../../redux/reducers/homePage-reducer";
import {compose} from "redux";
import withRedirectToLogin from "../../hoc/withRedirectToLogin";
import {
  selectCurrentPage,
  selectHomeTenders,
  selectHomeIsLoaded,
  selectPageSize,
  selectTotalCount,
} from "../../redux/selectors/homePage-selectors";
import {selectUserId, selectUser} from "../../redux/selectors/auth-selectors";

const HomePageAPI = ({
                       homeTenders,
                       user,
                       userId,
                       isLoaded,
                       totalCount,
                       pageSize,
                       currentPage,
                       getHomeTenders
                     }) => {
  useEffect(() => {
    getHomeTenders()
  }, [getHomeTenders])

  const setCurrentPage = (pageNum) => {
    getHomeTenders(pageNum, pageSize)
  }

  return <Home homeTenders={homeTenders}
               user={user}
               userId={userId}
               isLoaded={isLoaded}
               totalCount={totalCount}
               pageSize={pageSize}
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}/>
}

const mapStateToProps = (state) => {
  return {
    homeTenders: selectHomeTenders(state),
    user: selectUser(state),
    userId: selectUserId(state),
    isLoaded: selectHomeIsLoaded(state),
    totalCount: selectTotalCount(state),
    pageSize: selectPageSize(state),
    currentPage: selectCurrentPage(state)
  }
}


export default compose(
  connect(mapStateToProps, {getHomeTenders}),
  withRedirectToLogin,
)(HomePageAPI)
