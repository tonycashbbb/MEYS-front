import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {EditAccountDataForm} from "@components";
import {toggleIsEditing, updateAccountData} from "@redux/actions/accountPage.action";
import {selectUser} from "@redux/selectors/auth.selector";
import {APP_TEXT} from "@app/i18n";

import s from './EditAccountData.module.css'

const EditAccountData = ({
                           user,
                           isEditing,
                           toggleIsEditing,
                           updateAccountData
                         }) => {
  const editDataSubmit = (accountData) => {
    console.log("From editDataSubmit")
    console.log(accountData)
    updateAccountData(accountData)
  }

  if (!isEditing) {
    return <Redirect to={"/account"}/>
  }

  return (
    <div className={s.edit}>
      <div className={"container"}>
        <div className={s.title}>{APP_TEXT.editAccountData.title}</div>
        <EditAccountDataForm onSubmit={editDataSubmit}
                             isEditing={isEditing}
                             initialValues={user}
                             cancelEditing={() => toggleIsEditing(false)}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isEditing: state.accountPage.isEditing,
  user: selectUser(state)
})

export default connect(mapStateToProps, {toggleIsEditing, updateAccountData})(EditAccountData);
