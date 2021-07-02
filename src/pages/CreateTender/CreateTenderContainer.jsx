import CreateTender from "./CreateTender";
import {connect} from "react-redux";
import {compose} from "redux";

import {withSuccessRedirect, withRedirectToLogin} from "@hoc";
import {AccountPageActions} from "@redux/actions";
import {selectUserId} from "@app/selectors";

const mapStateToProps = (state) => ({
  contractorId: selectUserId(state)
})

const mapDispatchToProps = (dispatch) => ({
  createTender: (name, budget, description, contractorId) => {
    dispatch(AccountPageActions.createTender(name, budget, description, contractorId))
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withSuccessRedirect,
  withRedirectToLogin
)(CreateTender)
