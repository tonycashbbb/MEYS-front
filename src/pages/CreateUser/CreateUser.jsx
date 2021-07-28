import React from 'react'
import {connect} from "react-redux";

import {CreateUserForm, Success} from "@components";
import {AuthActions} from "@redux/actions";
import {selectIsSuccess} from "@app/selectors";
import {APP_TEXT} from "@app/i18n";

import s from './CreateUser.module.scss'

const CreateUser = ({
                      createUser,
                      isSuccess,
                      formValues
                    }) => {

  const createContractorSubmit = (userData) => {
    createUser(userData)
  }

  if (isSuccess) {
    return <Success text={APP_TEXT.success.createAccount}/>
  }

  return (
    <div className="container">
      <div className={s.inner}>
        <div className={s.title}>{APP_TEXT.createAccount.title}</div>

        <CreateUserForm onSubmit={createContractorSubmit} formValues={formValues}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isSuccess: selectIsSuccess(state),
  formValues: state.form.createUser ? state.form.createUser.values : null
})

const mapDispatchToProps = (dispatch) => ({
  createUser: (userData) => dispatch(AuthActions.createUser(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
