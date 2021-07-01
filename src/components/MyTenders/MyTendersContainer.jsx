import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {Spinner, TenderList} from "@components";
import {AccountPageActions} from "@redux/actions";
import {
  selectUserId,
  selectIsLoaded,
  selectTenders
} from "@app/selectors";
import {APP_TEXT} from "@app/i18n";

const MyTendersContainer = ({
                              toggleIsRepliesShowing,
                              userId,
                              accountTenders,
                              getAccountTenders,
                              isLoaded,
                              startTender,
                              cancelTender,
                              retender,
                              setIsLoaded
                            }) => {

  useEffect(() => {
    getAccountTenders(userId)
  }, [getAccountTenders, userId, setIsLoaded])

  if (!isLoaded) {
    return <Spinner/>
  }

  return <TenderList isAccount
                     listItems={accountTenders}
                     title={APP_TEXT.tenderList.accountTitle}
                     startTender={startTender}
                     cancelTender={cancelTender}
                     retender={retender}
                     userId={userId}
                     toggleIsRepliesShowing={toggleIsRepliesShowing}/>
};

const mapStateToProps = (state) => ({
  accountTenders: selectTenders(state),
  userId: selectUserId(state),
  isLoaded: selectIsLoaded(state),
})

const mapDispatchToProps = (dispatch) => ({
  getAccountTenders: (contractorId) => dispatch(AccountPageActions.getAccountTenders(contractorId)),
  startTender: (tenderId, contractorId) => dispatch(AccountPageActions.startTender(tenderId, contractorId)),
  cancelTender: (tenderId, contractorId) => dispatch(AccountPageActions.cancelTender(tenderId, contractorId)),
  retender: (tenderId, contractorId) => dispatch(AccountPageActions.retender(tenderId, contractorId)),
  setIsLoaded: (isLoaded) => dispatch(AccountPageActions.setIsLoaded(isLoaded)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTendersContainer);
