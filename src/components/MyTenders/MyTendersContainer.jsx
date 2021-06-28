import React, {useEffect} from 'react';
import TenderList from "../TenderList/TenderList";
import {connect} from "react-redux";
import {
  cancelTender,
  getAccountTenders,
  retender, setIsLoaded,
  startTender
} from "@redux/actions/accountPage.action";
import {Spinner} from "@components/ui";
import {selectUserId} from "@redux/selectors/auth.selector";
import {selectIsLoaded, selectTenders} from "@redux/selectors/accountPage.selector";

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
                     title={"My tenders"}
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
