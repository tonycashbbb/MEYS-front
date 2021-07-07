import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import EditTender from "./EditTender";
import {selectTenderCreator} from "@app/selectors";
import {AccountTenderActions} from "@redux/actions";
import {withRedirectToLogin, withSuccessRedirect} from "@hoc";

const EditTenderContainer = ({
                               tender,
                               tenderCreator,
                               tenderRequests,
                               getAccountTender,
                               getTenderCreator,
                               getTenderRequests,
                               updateTender,
                               formValues,
                               ...props
                             }) => {
  const tenderEditId = props.match.params.id

  useEffect(() => {
    getAccountTender(tenderEditId)
  }, [getAccountTender, tenderEditId])

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

  return (
    <EditTender
      tender={tender}
      tenderCreator={tenderCreator}
      tenderRequests={tenderRequests}
      formValues={formValues}
      updateTender={updateTender}
    />
  )
};

const mapStateToProps = (state) => ({
  tender: state.accountTender.tender,
  tenderCreator: selectTenderCreator(state),
  tenderRequests: state.accountTender.tenderRequests,
  formValues: state.form.updateTender ? state.form.updateTender.values : null
})

const mapDispatchToProps = (dispatch) => ({
  getAccountTender: (tenderId) => dispatch(AccountTenderActions.getAccountTender(tenderId)),
  getTenderCreator: (tenderCreatorId) => dispatch(AccountTenderActions.getTenderCreator(tenderCreatorId)),
  getTenderRequests: (tenderId) => dispatch(AccountTenderActions.getTenderRequests(tenderId)),
  updateTender: (tenderData) => dispatch(AccountTenderActions.updateTender(tenderData))
})

export default compose(
  withSuccessRedirect,
  withRedirectToLogin,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(EditTenderContainer);