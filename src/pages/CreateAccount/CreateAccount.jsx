import React from 'react'
import {compose} from "redux";
import {connect} from "react-redux";

import {CreateContractorForm} from "@components";
import {withSuccessRedirect} from "@hoc";
import {createContractor} from "@redux/actions/auth.action";
import {APP_TEXT} from "@app/i18n";

import s from './CreateAccount.module.css'

const CreateAccount = ({createContractor}) => {

  const createContractorSubmit = (userData) => {
    createContractor(userData)
  }

  return (
    <div className="container">
      <div className={s.header}>
        <div className={s.title}>
          {APP_TEXT.createAccount.title}
        </div>
        <div className={s.form}>
          <CreateContractorForm onSubmit={createContractorSubmit} />
        </div>
      </div>
    </div>
  )
}

export default compose(
  connect(null, {createContractor}),
  withSuccessRedirect,
)(CreateAccount)
