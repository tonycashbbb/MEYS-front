import React from "react"

import ReplyToTenderForm from "../Form/ReplyToTenderForm/ReplyToTenderForm";

import s from './ReplyToTender.module.css'

const ReplyToTender = ({cancel, onSubmitReply}) => {

  return (
    <div className={s.replyToTender}>
      <h1>Replying:</h1>
      <ReplyToTenderForm onSubmit={onSubmitReply}
                         cancel={cancel}/>
    </div>
  )
}

export default ReplyToTender
