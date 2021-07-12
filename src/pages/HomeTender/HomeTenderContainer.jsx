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
  selectIsReplying
} from "@app/selectors";

class HomePageTenderAPI extends React.Component {
  componentDidMount() {
    this.props.getHomeTender(this.props.match.params.id)
  }

  // componentWillUnmount() {
  //   this.props.clearHomeTender()
  // }

  render() {
    return <HomeTender tenderId={this.props.match.params.id}
                       homeTender={this.props.homeTender}
                       getUser={this.props.getUser}
                       clearUser={this.props.clearUser}
                       contractor={this.props.contractor}
                       userId={this.props.userId}
                       isReplying={this.props.isReplying}
                       setIsReplying={this.props.setIsReplying}
                       replyOnTender={this.props.replyOnTender}
                       isSuccess={this.props.isSuccess}
                       currentUrl={this.props.match}/>
  }
}

const mapStateToProps = (state) => {
  return {
    homeTender: selectHomeTender(state),
    contractor: selectAccountUser(state),
    userId: selectUserId(state),
    isSuccess: selectIsSuccess(state),
    isReplying: selectIsReplying(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeTender: (tenderId) => dispatch(HomeTenderActions.getHomeTender(tenderId)),
    clearHomeTender: () => dispatch(HomeTenderActions.setHomeTender(null)),
    getUser: (userId) => dispatch(AccountPageActions.getUser(userId)),
    clearUser: () => dispatch(AccountPageActions.setUser(null)),
    setIsReplying: (isReplying) => dispatch(HomeTenderActions.setIsReplying(isReplying)),
    replyOnTender: (userId, tenderId, message) => dispatch(HomeTenderActions.replyOnTender(userId, tenderId, message))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectToLogin,
  withRouter
)(HomePageTenderAPI)
