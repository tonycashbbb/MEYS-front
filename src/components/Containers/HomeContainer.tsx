import React, {FC, useEffect} from 'react';
import {connect, ConnectedProps} from "react-redux";
import {compose} from "redux";

import {Home} from "@app/pages";
import {withRedirectToLogin} from "@hoc";
import {HomePageActions} from "@redux/actions";
import {
  selectHomeTenders,
  selectHomeIsLoaded,
  selectUserId,
  selectUser
} from "@app/selectors";
import {AppState} from "@app/types";

type PropsFromRedux = ConnectedProps<typeof connector>

type OwnProps = {}

type Props = PropsFromRedux & OwnProps

const HomePageAPI: FC<Props> = ({
                       homeTenders,
                       user,
                       userId,
                       isLoaded,
                       getHomeTenders
                     }) => {
  useEffect(() => {
    getHomeTenders()
  }, [getHomeTenders])

  return <Home homeTenders={homeTenders}
               user={user}
               userId={userId}
               isLoaded={isLoaded}/>
}

const mapStateToProps = (state: AppState) => {
  return {
    homeTenders: selectHomeTenders(state),
    user: selectUser(state),
    userId: selectUserId(state),
    isLoaded: selectHomeIsLoaded(state),
  }
}

const connector = connect(mapStateToProps, {getHomeTenders: HomePageActions.getHomeTenders})

export default compose(
  connect(mapStateToProps, {getHomeTenders: HomePageActions.getHomeTenders}),
  withRedirectToLogin,
)(HomePageAPI)
