import CreateTender from "./CreateTender";
import {connect} from "react-redux";
import {createTender} from "../../redux/actions/accountPage.action";
import {compose} from "redux";
import {withSuccessRedirect} from "../../hoc/withSuccessRedirect";
import withRedirectToLogin from "../../hoc/withRedirectToLogin";
import {selectUserId} from "../../redux/selectors/auth.selector";

const mapStateToProps = (state) => ({
  contractorId: selectUserId(state)
})

export default compose(
  connect(mapStateToProps, {createTender}),
  withSuccessRedirect,
  withRedirectToLogin
)(CreateTender)
