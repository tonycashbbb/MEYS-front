import React from 'react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import HomeTender from "./HomeTender";
import {withSuccessRedirect, withRedirectToLogin} from "@hoc";
import {getUser, getHomeTender, replyOnTender} from "@redux/actions";
import {selectUserId, selectAccountUser} from "@app/selectors";

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
