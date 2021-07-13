import {connect} from "react-redux";
import {compose} from "redux";

import CreateTender from "./CreateTender";
import {withRedirectToLogin} from "@hoc";
import {AccountPageActions} from "@redux/actions";
import {selectIsSuccess, selectUserId} from "@app/selectors";

const mapStateToProps = (state) => ({
  contractorId: selectUserId(state),
  isSuccess: selectIsSuccess(state),
  formValue: state.form.createTender ? state.form.createTender.values : null
})

const mapDispatchToProps = (dispatch) => ({
  createTender: (name, budget, description, contractorId) => {
    dispatch(AccountPageActions.createTender(name, budget, description, contractorId))
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectToLogin
)(CreateTender)
