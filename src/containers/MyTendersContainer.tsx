import React, {FC, useEffect} from 'react';
import {connect} from "react-redux";

import {Spinner, TenderList} from "@components";
import {AccountActions} from "@redux/actions";
import {
  selectUserId,
  selectTenders
} from "@app/selectors";
import {APP_TEXT} from "@app/i18n";
import {AppState, Tender} from "@app/types";

type MapStateProps = {
  accountTenders: Array<Tender> | null,
  userId: number | null,
}

type MapDispatchProps = {
  getAccountTenders: (contractorId: number) => void,
  clearAccountTenders: () => void,
  startTender: (tenderId: number, contractorId: number) => void,
  cancelTender: (tenderId: number, contractorId: number) => void,
  retender: (tenderId: number, contractorId: number) => void
}

type OwnProps = {
  showReplies: () => void
}

type Props = MapStateProps & MapDispatchProps & OwnProps

const MyTendersContainer: FC<Props> = ({
                                         showReplies,
                                         userId,
                                         accountTenders,
                                         getAccountTenders,
                                         clearAccountTenders,
                                         startTender,
                                         cancelTender,
                                         retender,
                                       }) => {

  useEffect(() => {
    if (userId) {
      getAccountTenders(userId)
    }

    return () => clearAccountTenders()
  }, [clearAccountTenders, getAccountTenders, userId])

  if (!accountTenders) {
    return <div style={{width: "70%"}}>
      <Spinner/>
    </div>
  }

  return <TenderList isAccount
                     listItems={accountTenders}
                     title={APP_TEXT.tenderList.accountTitle}
                     startTender={startTender}
                     cancelTender={cancelTender}
                     retender={retender}
                     userId={userId}
                     showReplies={showReplies}/>
};

const mapStateToProps = (state: AppState) => ({
  accountTenders: selectTenders(state),
  userId: selectUserId(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  getAccountTenders: (contractorId: number) => dispatch(AccountActions.getAccountTenders(contractorId)),
  clearAccountTenders: () => dispatch(AccountActions.setAccountTenders(null)),
  startTender: (tenderId: number, contractorId: number) => dispatch(AccountActions.startTender(tenderId, contractorId)),
  cancelTender: (tenderId: number, contractorId: number) => dispatch(AccountActions.cancelTender(tenderId, contractorId)),
  retender: (tenderId: number, contractorId: number) => dispatch(AccountActions.retender(tenderId, contractorId)),
})

export default connect<MapStateProps, MapDispatchProps, OwnProps, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(MyTendersContainer);
