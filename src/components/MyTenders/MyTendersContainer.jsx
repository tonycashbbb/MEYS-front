import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {Spinner, TenderList} from "@components";
import {AccountActions} from "@redux/actions";
import {
  selectUserId,
  selectIsLoaded,
  selectTenders
} from "@app/selectors";
import {APP_TEXT} from "@app/i18n";

const MyTendersContainer = ({
                              showReplies,
                              userId,
                              accountTenders,
                              getAccountTenders,
                              clearAccountTenders,
                              isLoaded,
                              startTender,
                              cancelTender,
                              retender,
                              setIsLoaded
                            }) => {

  useEffect(() => {
    getAccountTenders(userId)

    return () => clearAccountTenders()
  }, [clearAccountTenders, getAccountTenders, userId, setIsLoaded])

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

const mapStateToProps = (state) => ({
  accountTenders: selectTenders(state),
  userId: selectUserId(state),
  isLoaded: selectIsLoaded(state),
})

const mapDispatchToProps = (dispatch) => ({
  getAccountTenders: (contractorId) => dispatch(AccountActions.getAccountTenders(contractorId)),
  clearAccountTenders: () => dispatch(AccountActions.setAccountTenders(null)),
  startTender: (tenderId, contractorId) => dispatch(AccountActions.startTender(tenderId, contractorId)),
  cancelTender: (tenderId, contractorId) => dispatch(AccountActions.cancelTender(tenderId, contractorId)),
  retender: (tenderId, contractorId) => dispatch(AccountActions.retender(tenderId, contractorId)),
  setIsLoaded: (isLoaded) => dispatch(AccountActions.setIsLoaded(isLoaded)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTendersContainer);
