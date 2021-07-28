import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import {TenderRequestItem} from "@components";
import {AccountTenderActions} from "@redux/actions";
import {getUserAPI} from "@services";

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
  const [requestCreator, setRequestCreator] = useState({})

  useEffect(() => {
    (async function(){
      if (requestCreatorId) {
        const requestCreator = await getUserAPI(requestCreatorId)
        setRequestCreator(requestCreator)
      }
    }())
  }, [getRequestCreator, requestCreatorId])

  const acceptTenderRequestSubmit = () => {
    acceptTenderRequest(tenderRequestId, tenderId)
  }

  if (!requestCreator.name) {
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

export default connect(null, {
  getUserAPI,
  acceptTenderRequest: AccountTenderActions.acceptTenderRequest
})(TenderRequestItemContainer);
