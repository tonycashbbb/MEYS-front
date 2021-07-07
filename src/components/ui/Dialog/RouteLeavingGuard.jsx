import React, {Fragment} from 'react';
import {Prompt} from 'react-router-dom';

import Dialog from './Dialog';
import history from '@app/history';

export class RouteLeavingGuard extends React.Component {
  state = {
    popupVisible: false,
    lastLocation: null,
    confirmedNavigation: false,
  };

  componentDidUpdate = () => {
    if (this.props.when) {
      window.onbeforeunload = () => true;
    } else {
      window.onbeforeunload = undefined;
    }
  };

  componentWillUnmount() {
    window.onbeforeunload = null;
  }

  showPopup = (location) => {
    this.setState({
      popupVisible: true,
      lastLocation: location,
    });
  };

  closeModal = (callback) => {
    this.setState({popupVisible: false}, callback);
  };

  handleBlockedNavigation = (nextLocation) => {
    if (!this.state.confirmedNavigation) {
      this.showPopup(nextLocation);
      return false;
    }

    return true;
  };

  handleConfirmNavigationClick = () => {
    this.closeModal(() => {
      const {navigate} = this.props;
      const {lastLocation} = this.state;

      if (lastLocation) {
        this.setState(
          () => ({confirmedNavigation: true}),
          () => {
            const path = lastLocation.pathname + lastLocation.search;

            navigate ? navigate(path) : history.push(path);
          },
        );
      }
    });
  };

  render() {
    // debugger
    const {when, confirmation} = this.props;

    return (
      <Fragment>
        <Prompt when={when} message={this.handleBlockedNavigation} />
        <Dialog
          open={this.state.popupVisible}
          handleClose={() => this.closeModal()}
          handleConfirm={this.handleConfirmNavigationClick}
          confirmation={confirmation}
        />
      </Fragment>
    );
  }
}
