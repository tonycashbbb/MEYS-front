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
                      setIsReplying,
                      replyOnTender,
                      isSuccess,
                      isReplying,
                      isRepliesCancel
                    }) => {
  const [canReply, setCanReply] = useState(true)
  const [isAccepted, setIsAccepted] = useState(false)
  const [isDeclined, setIsDeclined] = useState(false)

  useEffect(() => {
    if (homeTender) {
      getUser(homeTender.contractorId)
    }

    return () => clearUser()
  }, [clearUser, homeTender, getUser])

  useEffect(() => {
    (async function () {
      if (homeTender) {
        const allReplies = await getAllTenderRequestsAPI()
        const currentReplyArr = allReplies.filter(reply => reply.tenderId === homeTender.id && reply.userId === userId)

        if (currentReplyArr.length === 0) {
          setCanReply(true)
        } else {
          if (currentReplyArr[0].status === APP_TEXT.reply.statuses.ACCEPTED) {
            setIsAccepted(true)
          }
          setCanReply(false)
        }
      }
    }())
  }, [userId, homeTender])

  useEffect(() => {
    if (!canReply && homeTender.status === APP_TEXT.tender.statuses.ARCHIVED) {
      setIsDeclined(true)
    }
  }, [canReply, homeTender])

  const onIsReplying = () => {
    history.push(`/home/tenders/${tenderId}/reply`)
  }

  const offIsReplying = (e) => {
    e.preventDefault()
    history.push(`/home/tenders/${tenderId}`)
  }

  const onSubmitReply = (replyData) => {
    replyOnTender(userId, homeTender.id, replyData.replyText)
  }

  const onRepliesCancel = () => {
    history.goBack()
  }

  if (!homeTender || !contractor) {
    return <Spinner/>
  }

  if (isSuccess) {
    return <Success text={APP_TEXT.success.replyToTender} tenderId={tenderId}/>
  }

  return (
    <div className="container">
      <Tender tender={homeTender}
              contractor={contractor}/>

      {canReply && !isReplying && <Button onClick={onIsReplying}>{APP_TEXT.general.reply}</Button>}
      {canReply && isReplying && <ReplyToTender onSubmitReply={onSubmitReply}
                                                cancel={offIsReplying}
                                                setIsReplying={setIsReplying}/>}
      <div className={s.buttons}>
        {!canReply && <div className={s.replied}>
          {isAccepted && <Button btnColor={theme.COLOR.SUCCESS}
                                 btnHover={theme.COLOR.SUCCESS}>{APP_TEXT.general.accepted}</Button>}
          {isDeclined && <Button btnColor={theme.COLOR.PRIMARY}
                                 btnHover={theme.COLOR.PRIMARY}>{APP_TEXT.general.declined}</Button>}
          {!isDeclined && <Button btnHover={theme.COLOR.PRIMARY}>{APP_TEXT.general.replied}</Button>}
        </div>}
        <div className={s.repliesCancel}>
          {isRepliesCancel && <Button onClick={onRepliesCancel}
                                      btnColor={theme.COLOR.SECONDARY}
                                      btnHover={theme.COLOR.SECONDARY_HOVER}>{APP_TEXT.general.back}</Button>}
        </div>
      </div>

    </div>
  )
}

export default HomeTender
