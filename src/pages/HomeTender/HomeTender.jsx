import React, {useEffect, useState} from 'react'

import {
  Tender,
  ReplyToTender,
  Spinner,
  Button,
  Success
} from "@components";
import {getAllTenderRequestsAPI} from "@services";
import {APP_TEXT} from "@app/i18n";
import history from "@app/history";

import theme from "@app/styles";
import s from './HomeTender.module.scss'

const HomeTender = ({
                      tenderId,
                      homeTender,
                      getUser,
                      clearUser,
                      contractor,
                      userId,
                      isReplying,
                      setIsReplying,
                      replyOnTender,
                      isSuccess,
                    }) => {
  const [canReply, setCanReply] = useState(true)
  const [isAccepted, setIsAccepted] = useState(false)

  useEffect(() => {
    if (homeTender) {
      getUser(homeTender.contractorId)
    }

    // return () => clearUser()
  }, [clearUser, homeTender, getUser])

  useEffect(() => {
    (async function () {
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
    }())
  }, [userId, homeTender])

  const onIsReplying = () => {
    history.push(`/home/tenders/${tenderId}/reply`)
    setIsReplying(true)
  }

  const offIsReplying = (e) => {
    e.preventDefault()
    // history.goBack()
    history.push(`/home/tenders/${tenderId}`)
    setIsReplying(false)
  }

  const onSubmitReply = (replyData) => {
    replyOnTender(userId, homeTender.id, replyData.replyText)
    setIsReplying(false)
  }

  if (!homeTender || !contractor) {
    return <Spinner/>
  }

  if (isSuccess) {
    return <Success title={APP_TEXT.success.replyToTender.title}/>
  }

  return (
    <div className="container">
      <Tender tender={homeTender}
              contractor={contractor}/>

      {canReply && !isReplying && <Button onClick={onIsReplying}>{APP_TEXT.general.reply}</Button>}
      {canReply && isReplying && <ReplyToTender onSubmitReply={onSubmitReply}
                                                cancel={offIsReplying}
                                                setIsReplying={setIsReplying}/>}
      {!canReply && <div className={s.replied}>
        {isAccepted
          ? <Button btnColor={theme.COLOR.SECONDARY}
                    btnHover={theme.COLOR.SECONDARY_HOVER}>{APP_TEXT.general.accepted}</Button>
          : <Button btnHover={theme.COLOR.PRIMARY}>{APP_TEXT.general.replied}</Button>}
      </div>}
    </div>
  )
}

export default HomeTender
