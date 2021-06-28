import React from "react"
import s from './ReplyToTender.module.css'
import ReplyToTenderForm from "../Form/ReplyToTenderForm/ReplyToTenderForm";

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
