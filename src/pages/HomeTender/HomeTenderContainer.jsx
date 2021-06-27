import React from 'react'
import HomeTender from "./HomeTender";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUser} from "../../redux/reducers/accountPage-reducer";
import withRedirectToLogin from "../../hoc/withRedirectToLogin";
import {withSuccessRedirect} from "../../hoc/withSuccessRedirect";
import {selectUserId} from "../../redux/selectors/auth-selectors";
import {selectAccountUser} from "../../redux/selectors/accountPage-selectors";
import {getHomeTender, replyOnTender} from "../../redux/reducers/homeTender-reducer";

class HomePageTenderAPI extends React.Component {
  componentDidMount() {
    this.props.getHomeTender(this.props.match.params.id)
  }

  render() {
    return <HomeTender homeTender={this.props.homeTender}
                       getUser={this.props.getUser}
                       contractor={this.props.contractor}
                       userId={this.props.userId}
                       replyOnTender={this.props.replyOnTender}/>
  }
}

const mapStateToProps = (state) => {
  return {
    homeTender: state.homeTender.tender,
    contractor: selectAccountUser(state),
    userId: selectUserId(state)
  }
}

export default compose(
  connect(mapStateToProps, {getHomeTender, getUser, replyOnTender}),
  withRedirectToLogin,
  withSuccessRedirect,
  withRouter
)(HomePageTenderAPI)
