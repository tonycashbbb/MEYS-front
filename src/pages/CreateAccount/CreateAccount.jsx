import React from 'react'
import s from './CreateAccount.module.css'
import {CreateContractorForm} from "@components/Form";
import {withSuccessRedirect} from "@hoc";
import {compose} from "redux";
import {connect} from "react-redux";
import {createContractor} from "@redux/actions/auth.action";

const CreateAccount = ({createContractor}) => {

  const createContractorSubmit = (userData) => {
    createContractor(userData)
  }

  return (
    <div className="container">
      <div className={s.header}>
        <div className={s.title}>
          To create an account fill the form out:
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
