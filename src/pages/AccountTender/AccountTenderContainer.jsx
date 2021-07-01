import React, {useEffect} from 'react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import AccountTender from "./AccountTender";
import {withRedirectToLogin} from "@hoc";
import {AccountTenderActions} from "@redux/actions";
import {selectTenderCreator} from "@app/selectors";

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

const mapDispatchToProps = (dispatch) => ({
  getAccountTender: (tenderId) => dispatch(AccountTenderActions.getAccountTender(tenderId)),
  getTenderCreator: (tenderCreatorId) => dispatch(AccountTenderActions.getTenderCreator(tenderCreatorId)),
  getTenderRequests: (tenderId) => dispatch(AccountTenderActions.getTenderRequests(tenderId)),
  updateTender: (tenderData) => dispatch(AccountTenderActions.updateTender(tenderData))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectToLogin,
  withRouter
)(AccountTenderAPI)
