import React from "react"
import {connect} from "react-redux";

import {ReplyToTenderForm} from "@components";

import s from './ReplyToTender.module.css'

const ReplyToTender = ({
                         cancel,
                         onSubmitReply,
                         formValues,
                       }) => {

  return (
    <div className={s.replyToTender}>
      <h1>Replying:</h1>

      <ReplyToTenderForm onSubmit={onSubmitReply}
                         cancel={cancel}
                         formValues={formValues}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  formValues: state.form.replyToTender ? state.form.replyToTender.values : null
})

export default connect(mapStateToProps, {})(ReplyToTender)
