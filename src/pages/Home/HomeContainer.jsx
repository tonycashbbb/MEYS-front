import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";

import Home from "./Home";
import {withRedirectToLogin} from "@hoc";
import {HomeActions} from "@redux/actions";
import {
  selectCurrentPage,
  selectHomeTenders,
  selectHomeIsLoaded,
  selectPageSize,
  selectTotalCount,
  selectUserId,
  selectUser
} from "@app/selectors";

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

const mapDispatchToProps = (dispatch) => ({
  getHomeTenders: () => dispatch(HomeActions.getHomeTenders())
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectToLogin,
)(HomePageAPI)
