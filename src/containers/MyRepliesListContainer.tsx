import React, {FC, useEffect} from 'react';
import {connect} from "react-redux";

import MyRepliesList from "@components/MyReplies/MyRepliesList/MyRepliesList";
import {AccountActions} from "@redux/actions";
import {selectIsLoaded, selectMyRepliesList, selectUserId} from "@app/selectors";
import {AppState, TenderRequest} from "@app/types";

type MapStateProps = {
  userId: number | null
  myRepliesList: Array<TenderRequest> | null
  isLoaded: boolean
}

type MapDispatchProps = {
  clearUser: () => void
  clearMyRepliesList: () => void
  getMyRepliesList: (userId: number) => void
}

type OwnProps = {
  showTenders: () => void
}

type Props = MapStateProps & MapDispatchProps & OwnProps

const MyRepliesListContainer: FC<Props> = ({
                                             userId,
                                             clearUser,
                                             showTenders,
                                             getMyRepliesList,
                                             clearMyRepliesList,
                                             myRepliesList
                                           }) => {
  useEffect(() => {
    if (userId) {
      getMyRepliesList(userId)
    }

    return () => {
      clearMyRepliesList()
      clearUser()
    }
  }, [userId, clearUser, clearMyRepliesList, getMyRepliesList])

  return <MyRepliesList showTenders={showTenders}
                        myRepliesList={myRepliesList}/>
};

const mapStateToProps = (state: AppState) => ({
  userId: selectUserId(state),
  myRepliesList: selectMyRepliesList(state),
  isLoaded: selectIsLoaded(state)
})

const mapDispatchToProps = (dispatch: any) => ({
  clearUser: () => dispatch(AccountActions.setUser(null)),
  clearMyRepliesList: () => dispatch(AccountActions.setMyRepliesList(null)),
  getMyRepliesList: (userId: number) => dispatch(AccountActions.getMyRepliesList(userId)),
})

export default connect<MapStateProps, MapDispatchProps, OwnProps, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(MyRepliesListContainer);
