import React, {FC, useEffect, useState} from 'react';

import {getTenderAPI} from "@services";
import {MyRepliesListItem} from "@components";
import spinner from "@app/assets/Spinner.gif";
import {Tender} from "@app/types";

type Props = {
  tenderId: number
  status: string
}

const MyRepliesListItemContainer: FC<Props> = ({
                                                 tenderId,
                                                 status
                                               }) => {
  const [tender, setTender] = useState<Tender | null>(null)

  useEffect(() => {
    (async function () {
      if (tenderId) {
        const tender = await getTenderAPI(tenderId)
        setTender(tender)
      }
    }())
  }, [tenderId])

  if (!tender) {
    return <div>
      <img src={spinner} alt="spinner" height={"80px"}/>
    </div>
  }

  return <MyRepliesListItem tenderId={tender.id}
                            tenderName={tender.name}
                            status={status}/>
};

export default MyRepliesListItemContainer;
