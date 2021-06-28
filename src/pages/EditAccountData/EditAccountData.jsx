import React from 'react';
import s from './EditAccountData.module.css'
import EditAccountDataForm from "@components/Form/EditAccountDataForm/EditAccountDataForm";
import {connect} from "react-redux";
import {toggleIsEditing, updateAccountData} from "@redux/actions/accountPage.action";
import {selectUser} from "@redux/selectors/auth.selector";
import {Button} from "@components/ui";
import {Redirect} from "react-router-dom";

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
        <div className={s.title}>Edit account data</div>
        <EditAccountDataForm onSubmit={editDataSubmit}
                             isEditing={isEditing}
                             initialValues={user}/>
        <div className={s.button}>
          <Button btnColor={"#6498E1"}
                  btnHover={"#71ACFF"}
                  onClick={() => toggleIsEditing(false)}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isEditing: state.accountPage.isEditing,
  user: selectUser(state)
})

export default connect(mapStateToProps, {toggleIsEditing, updateAccountData})(EditAccountData);
