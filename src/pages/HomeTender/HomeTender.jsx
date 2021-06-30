import React, {useEffect, useState} from 'react'

import {
  Tender,
  ReplyToTender,
  Spinner,
  Button
} from "@components";
import {getAllTenderRequestsAPI} from "@services/accountPage.services";
import {APP_TEXT} from "@app/i18n";

import s from './HomeTender.module.css'

const HomeTender = ({
                      homeTender,
                      getUser,
                      contractor,
                      userId,
                      replyOnTender
                    }) => {
  const [isReplying, setIsReplying] = useState(false)
  const [canReply, setCanReply] = useState(true)
  const [isAccepted, setIsAccepted] = useState(false)

  useEffect(() => {
    if (homeTender) {
      getUser(homeTender.contractorId)
    }
  }, [homeTender, getUser])

  useEffect(() => {
    const fetchData = async () => {
      if (homeTender) {
        const allReplies = await getAllTenderRequestsAPI()
        const bufArr = allReplies.filter(reply => reply.tenderId === homeTender.id && reply.userId === userId)

        if (bufArr.length === 0) {
          setCanReply(true)
        } else {
          allReplies.forEach(reply => {
            if (reply.status === APP_TEXT.reply.statuses.ACCEPTED) {
              setIsAccepted(true)
            }
          })
          setCanReply(false)
        }
      }
    }
    fetchData()
  }, [userId, homeTender])

  const changeIsReplying = () => {
    setIsReplying(!isReplying)
  }

  const onSubmitReply = (replyData) => {
    replyOnTender(userId, homeTender.id, replyData.replyText)
    setIsReplying(false)
  }

  if (!homeTender || !contractor) {
    return <Spinner/>
  }

  return (
    <div className="container">
      <Tender tender={homeTender}
              contractor={contractor}/>

      {canReply && !isReplying && <Button onClick={changeIsReplying}>{APP_TEXT.general.reply}</Button>}
      {canReply && isReplying && <ReplyToTender onSubmitReply={onSubmitReply}
                                                cancel={changeIsReplying}/>}
      {!canReply && <div className={s.replied}>
        {isAccepted
          ? <Button btnColor={"#6498E1"}
                    btnHover={"#6498E1"}>{APP_TEXT.general.accepted}</Button>
          : <Button btnHover={"#CB9AE1"}>{APP_TEXT.general.replied}</Button>}
      </div>}
    </div>
  )
}

export default HomeTender
