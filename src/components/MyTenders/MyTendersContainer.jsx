import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {Spinner, TenderList} from "@components";
import {
  cancelTender,
  getAccountTenders,
  retender,
  setIsLoaded,
  startTender
} from "@redux/actions";
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

export default connect(mapStateToProps, {
  getAccountTenders,
  startTender,
  cancelTender,
  retender,
  setIsLoaded,
})(MyTendersContainer);
