import CreateTender from "./CreateTender";
import {connect} from "react-redux";
import {compose} from "redux";

import {withSuccessRedirect, withRedirectToLogin} from "@hoc";
import {createTender} from "@redux/actions";
import {selectUserId} from "@app/selectors";

const mapStateToProps = (state) => ({
  contractorId: selectUserId(state)
})

export default compose(
  connect(mapStateToProps, {createTender}),
  withSuccessRedirect,
  withRedirectToLogin
)(CreateTender)
