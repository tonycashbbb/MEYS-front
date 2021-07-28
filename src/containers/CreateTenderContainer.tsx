import {connect} from "react-redux";
import {compose} from "redux";

import {CreateTender} from "@app/pages";
import {withRedirectToLogin} from "@hoc";
import {AccountActions} from "@redux/actions";
import {selectIsSuccess, selectUserId} from "@app/selectors";
import {AppState} from "@app/types";

const mapStateToProps = (state: AppState) => ({
  contractorId: selectUserId(state),
  isSuccess: selectIsSuccess(state),
  formValue: state.form.createTender ? state.form.createTender.values : null
})

const mapDispatchToProps = (dispatch: any) => ({
  createTender: (name: string, budget: number, description: string, contractorId: number) => {
    dispatch(AccountActions.createTender(name, budget, description, contractorId))
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectToLogin
)(CreateTender)
