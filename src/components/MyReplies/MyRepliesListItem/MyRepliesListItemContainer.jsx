import React, {useEffect, useState} from 'react';
import {getTenderAPI} from "@services/homePage.service";
import MyRepliesListItem from "./MyRepliesListItem";
import spinner from "@app/assets/Spinner.gif";

const MyRepliesListItemContainer = ({
                                      tenderId,
                                      status,
                                      message
                                    }) => {
  const [tender, setTender] = useState(null)

  useEffect(() => {
    const fetchTender = async () => {
      if (tenderId) {
        const tender = await getTenderAPI(tenderId)
        setTender(tender)
      }
    }
    fetchTender()
  }, [tenderId])

  if (!tender) {
    return <div>
      <img src={spinner} alt="spinner" height={"80px"}/>
    </div>
  }

  return <MyRepliesListItem tenderId={tender.id}
                            tenderName={tender.name}
                            message={message}
                            status={status}/>
};

export default MyRepliesListItemContainer;
