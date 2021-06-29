import React from 'react';
import s from './EditAccountData.module.css'
import EditAccountDataForm from "@components/Form/EditAccountDataForm/EditAccountDataForm";
import {connect} from "react-redux";
import {toggleIsEditing, updateAccountData} from "@redux/actions/accountPage.action";
import {selectUser} from "@redux/selectors/auth.selector";
import {Redirect} from "react-router-dom";
import {APP_TEXT} from "@components/i18n";

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
