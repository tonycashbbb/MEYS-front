import React, {useEffect} from 'react';
import TenderList from "../TenderList/TenderList";
import {connect} from "react-redux";
import {selectIsLoaded, selectTenders} from "../../redux/selectors/accountPage.selector";
import {
  cancelTender,
  getAccountTenders,
  retender, setIsLoaded,
  startTender
} from "../../redux/actions/accountPage.action";
import Spinner from "../ui/Spinner/Spinner";
import {selectUserId} from "../../redux/selectors/auth.selector";

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

  return <TenderList listItems={accountTenders}
                     title={"My tenders"}
                     isAccount={true}
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
