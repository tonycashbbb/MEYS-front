import React from 'react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import HomeTender from "./HomeTender";
import {withRedirectToLogin} from "@hoc";
import {HomeTenderActions, AccountPageActions} from "@redux/actions";
import {selectUserId, selectAccountUser, selectIsSuccess} from "@app/selectors";

class HomePageTenderAPI extends React.Component {
  componentDidMount() {
    this.props.getHomeTender(this.props.match.params.id)
  }

  render() {
    return <HomeTender homeTender={this.props.homeTender}
                       getUser={this.props.getUser}
                       contractor={this.props.contractor}
                       userId={this.props.userId}
                       replyOnTender={this.props.replyOnTender}
                       isSuccess={this.props.isSuccess}/>
  }
}

const mapStateToProps = (state) => {
  return {
    homeTender: state.homeTender.tender,
    contractor: selectAccountUser(state),
    userId: selectUserId(state),
    isSuccess: selectIsSuccess(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeTender: (tenderId) => dispatch(HomeTenderActions.getHomeTender(tenderId)),
    getUser: (userId) => dispatch(AccountPageActions.getUser(userId)),
    replyOnTender: (userId, tenderId, message) => dispatch(HomeTenderActions.replyOnTender(userId, tenderId, message))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectToLogin,
  withRouter
)(HomePageTenderAPI)
