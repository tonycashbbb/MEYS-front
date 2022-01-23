import React from 'react';
import s from './EditAccountData.module.css'
import EditAccountDataForm from "../../components/Form/EditAccountData-Form/EditAccountDataForm";
import {connect, useDispatch} from "react-redux";
import Button from "../../components/ui/Button/Button";
import {updateAccountData} from "@redux/actions/account.action";
import history from "@app/history";
import {toggleIsSuccess} from "@redux/actions/app.action";
import {Success} from "@components";
import {APP_TEXT} from "@app/i18n";
import {selectIsSuccess} from "@app/selectors";

const EditAccountData = ({
                           user,
                           isEditing,
                           updateAccountData,
                           isSuccess
                         }) => {
  const dispatch = useDispatch()

  const editDataSubmit = (accountData) => {
    updateAccountData(accountData)
    dispatch(toggleIsSuccess(true))
  }

  if (isSuccess) {
    return <Success text={APP_TEXT.success.updateAccount}/>
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
                  onClick={() => history.goBack()}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSuccess: selectIsSuccess(state),
  user: state.auth.user
})

export default connect(mapStateToProps, {updateAccountData})(EditAccountData);
