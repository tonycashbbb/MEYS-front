import React from 'react'
import {connect} from "react-redux";

import {CreateContractorForm, Success} from "@components";
import {AuthActions} from "@redux/actions";
import {selectIsSuccess} from "@app/selectors";
import {APP_TEXT} from "@app/i18n";

import s from './CreateAccount.module.scss'

const CreateAccount = ({
                         createContractor,
                         isSuccess,
                         formValues
                       }) => {

  const createContractorSubmit = (userData) => {
    createContractor(userData)
  }

  if (isSuccess) {
    return <Success title={APP_TEXT.success.createAccount.title}/>
  }

  return (
    <div className="container">
      <div className={s.inner}>
        <div className={s.title}>{APP_TEXT.createAccount.title}</div>

        <CreateContractorForm onSubmit={createContractorSubmit} formValues={formValues}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isSuccess: selectIsSuccess(state),
  formValues: state.form.createContractor ? state.form.createContractor.values : null
})

const mapDispatchToProps = (dispatch) => ({
  createContractor: (userData) => dispatch(AuthActions.createContractor(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
