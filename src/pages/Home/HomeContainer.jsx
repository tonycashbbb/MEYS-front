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
import {useSearchDebounce} from "@app/hooks/useSearchDebounce/useSearchDebounce";

const HomePageAPI = ({
                       homeTenders,
                       user,
                       userId,
                       isLoaded,
                       getHomeTenders
                     }) => {
  const {searchValue, handleSearchChange} = useSearchDebounce({callback: getHomeTenders});

  useEffect(() => {
    getHomeTenders()
  }, [])

  return <Home {...{homeTenders, isLoaded, userId, user, searchValue, setSearchValue: handleSearchChange}} />
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
  getHomeTenders: (search) => dispatch(HomeActions.getHomeTenders(search))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectToLogin,
)(HomePageAPI)
