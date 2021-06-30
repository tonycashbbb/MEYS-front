import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import TenderRequestItem from "./TenderRequestItem";
import {selectRequestCreator} from "@redux/selectors/accountPage.selector";
import {acceptTenderRequest} from "@redux/actions/accountTender.action";
import {getContractorAPI} from "@services/accountPage.service";

import spinner from "@app/assets/Spinner.gif";

const TenderRequestItemContainer = ({
                                      tenderRequestId,
                                      tenderId,
                                      requestCreatorId,
                                      status,
                                      message,
                                      isTenderGoing,
                                      getRequestCreator,
                                      acceptTenderRequest
                                    }) => {
  const [requestCreator, setRequestCreator] = useState({name: "no name"})

  useEffect(() => {
    const fetchRequestCreator = async () => {
      if (requestCreatorId) {
        const requestCreator = await getContractorAPI(requestCreatorId)
        setRequestCreator(requestCreator)
      }
    }
    fetchRequestCreator()
  }, [getRequestCreator, requestCreatorId])

  const acceptTenderRequestSubmit = () => {
    acceptTenderRequest(tenderRequestId, tenderId)
  }

  if (!requestCreator) {
    return <div>
      <img src={spinner} alt="spinner" height={"121px"}/>
    </div>
  }

  return <TenderRequestItem requestCreatorName={requestCreator.name}
                            status={status}
                            message={message}
                            acceptTender={acceptTenderRequestSubmit}
                            isTenderGoing={isTenderGoing}/>;
};

const mapStateToProps = (state) => ({
  requestCreator: selectRequestCreator(state)
})

export default connect(mapStateToProps, {
  getContractorAPI,
  acceptTenderRequest
})(TenderRequestItemContainer);
