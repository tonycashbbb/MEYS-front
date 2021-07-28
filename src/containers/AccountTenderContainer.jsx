import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {compose} from "redux";

import AccountTender from "../pages/AccountTender/AccountTender";
import {withRedirectToLogin} from "@hoc";
import {AccountTenderActions} from "@redux/actions";
import {selectIsSuccess, selectTenderCreator} from "@app/selectors";

const AccountTenderAPI = ({
                            tender,
                            tenderCreator,
                            tenderRequests,
                            getAccountTender,
                            clearAccountTender,
                            getTenderCreator,
                            clearTenderCreator,
                            getTenderRequests,
                            clearTenderRequests,
                            updateTender,
                            formValues,
                            isSuccess,
                            match
                          }) => {
  const tenderId = match.params.id
  let isEditing = match.path.indexOf("edit")
  isEditing = isEditing !== -1

  useEffect(() => {
    getAccountTender(tenderId)

    return () => clearAccountTender()
  }, [clearAccountTender, getAccountTender, tenderId])

  useEffect(() => {
    if (tender) {
      getTenderCreator(tender.contractorId)
    }

    return () => clearTenderCreator()
  }, [clearTenderCreator, getTenderCreator, tender])

  useEffect(() => {
    if (tender) {
      getTenderRequests(tender.id)
    }

    return () => clearTenderRequests()
  }, [clearTenderRequests, getTenderRequests, tender])

  return <AccountTender tenderId={tenderId}
                        tender={tender}
                        tenderCreator={tenderCreator}
                        tenderRequests={tenderRequests}
                        updateTender={updateTender}
                        formValues={formValues}
                        isSuccess={isSuccess}
                        isEditing={isEditing}/>
}

const mapStateToProps = (state) => ({
  tender: state.accountTender.tender,
  tenderCreator: selectTenderCreator(state),
  tenderRequests: state.accountTender.tenderRequests,
  formValues: state.form.updateTender ? state.form.updateTender.values : null,
  isSuccess: selectIsSuccess(state),
})

const mapDispatchToProps = (dispatch) => ({
  getAccountTender: (tenderId) => dispatch(AccountTenderActions.getAccountTender(tenderId)),
  clearAccountTender: () => dispatch(AccountTenderActions.setAccountTender(null)),
  getTenderCreator: (tenderCreatorId) => dispatch(AccountTenderActions.getTenderCreator(tenderCreatorId)),
  clearTenderCreator: () => dispatch(AccountTenderActions.setTenderCreator(null)),
  getTenderRequests: (tenderId) => dispatch(AccountTenderActions.getTenderRequests(tenderId)),
  clearTenderRequests: () => dispatch(AccountTenderActions.setTenderRequests(null)),
  updateTender: (tenderData) => dispatch(AccountTenderActions.updateTender(tenderData)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectToLogin
)(AccountTenderAPI)
