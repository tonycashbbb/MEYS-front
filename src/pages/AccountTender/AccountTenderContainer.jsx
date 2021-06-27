import React, {useEffect} from 'react'
import AccountTender from "./AccountTender";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import withRedirectToLogin from "../../hoc/withRedirectToLogin";
import {
  getAccountTender,
  getTenderCreator,
  getTenderRequests,
  updateTender
} from "../../redux/reducers/accountTender-reducer";
import {selectTenderCreator} from "../../redux/selectors/accountPage-selectors";

const AccountTenderAPI = ({
                            tender,
                            tenderCreator,
                            tenderRequests,
                            getAccountTender,
                            getTenderCreator,
                            getTenderRequests,
                            updateTender,
                            ...props
                          }) => {
  useEffect(() => {
    getAccountTender(props.match.params.id)
  }, [getAccountTender, props.match.params.id])

  useEffect(() => {
    if (tender) {
      getTenderCreator(tender.contractorId)
    }
  }, [getTenderCreator, tender])

  useEffect(() => {
    if (tender) {
      getTenderRequests(tender.id)
    }
  }, [getTenderRequests, tender])

  return <AccountTender tender={tender}
                        tenderCreator={tenderCreator}
                        tenderRequests={tenderRequests}
                        updateTender={updateTender}/>
}

const mapStateToProps = (state) => ({
  tender: state.accountTender.tender,
  tenderCreator: selectTenderCreator(state),
  tenderRequests: state.accountTender.tenderRequests,
})

export default compose(
  connect(mapStateToProps, {getAccountTender, getTenderCreator, getTenderRequests, updateTender}),
  withRedirectToLogin,
  withRouter
)(AccountTenderAPI)
