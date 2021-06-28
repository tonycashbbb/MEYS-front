import React from 'react'
import HomeTender from "./HomeTender";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUser} from "@redux/actions/accountPage.action";
import {withSuccessRedirect, withRedirectToLogin} from "@hoc";
import {selectUserId} from "@redux/selectors/auth.selector";
import {selectAccountUser} from "@redux/selectors/accountPage.selector";
import {getHomeTender, replyOnTender} from "@redux/actions/homeTender.action";

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
