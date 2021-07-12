import React from 'react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import HomeTender from "./HomeTender";
import {withRedirectToLogin} from "@hoc";
import {HomeTenderActions, AccountPageActions} from "@redux/actions";
import {
  selectUserId,
  selectAccountUser,
  selectIsSuccess,
  selectHomeTender,
} from "@app/selectors";

class HomePageTenderAPI extends React.Component {
  componentDidMount() {
    this.props.getHomeTender(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.clearHomeTender()
  }

  render() {
    const isReplying = this.props.match.path === '/home/tenders/:id/reply'
    const isRepliesCancel = this.props.match.path === '/account/replies/:id'

    return <HomeTender tenderId={this.props.match.params.id}
                       homeTender={this.props.homeTender}
                       getUser={this.props.getUser}
                       clearUser={this.props.clearUser}
                       contractor={this.props.contractor}
                       userId={this.props.userId}
                       replyOnTender={this.props.replyOnTender}
                       isSuccess={this.props.isSuccess}
                       isReplying={isReplying}
                       isRepliesCancel={isRepliesCancel}/>
  }
}

const mapStateToProps = (state) => {
  return {
    homeTender: selectHomeTender(state),
    contractor: selectAccountUser(state),
    userId: selectUserId(state),
    isSuccess: selectIsSuccess(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeTender: (tenderId) => dispatch(HomeTenderActions.getHomeTender(tenderId)),
    clearHomeTender: () => dispatch(HomeTenderActions.setHomeTender(null)),
    getUser: (userId) => dispatch(AccountPageActions.getUser(userId)),
    clearUser: () => dispatch(AccountPageActions.setUser(null)),
    replyOnTender: (userId, tenderId, message) => dispatch(HomeTenderActions.replyOnTender(userId, tenderId, message))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectToLogin,
  withRouter
)(HomePageTenderAPI)
