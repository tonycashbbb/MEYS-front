import React, {useEffect, useState} from 'react';
import {useHistory, Prompt} from "react-router-dom";

import Dialog from "./Dialog";
import history from '@app/history';

const DialogContainer = ({when, confirmation}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [lastLocation, setLastLocation] = useState(null)
  const [isNavigationConfirmed, setIsNavigationConfirmed] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (when) {
      window.onbeforeunload = () => true;
    } else {
      window.onbeforeunload = undefined;
    }

    return () => window.onbeforeunload = null;
  }, [when])

  const showPopup = (location) => {
    setIsPopupVisible(true)
    setLastLocation(location)
  }

  const closePopup = (path = null) => {
    setIsPopupVisible(false)
  }

  const handleBlockedNavigation = (nextLocation) => {
    if (!isNavigationConfirmed) {
      showPopup(nextLocation)
      return false
    }

    return true
  }

  const handleConfirmNavigationClick = () => {
    if (lastLocation) {
      setIsNavigationConfirmed(true)

      const path = lastLocation.pathname + lastLocation.search

      history.goBack()
      // history.push(path)
    }

    closePopup()
  };

  return (
    <>
      <Prompt when={when} message={handleBlockedNavigation}/>
      {/* handleClose={closePopup} isn't working */}
      <Dialog
        open={isPopupVisible}
        confirmation={confirmation}
        handleClose={() => closePopup()}
        handleConfirm={() => handleConfirmNavigationClick()}
      />
    </>
  );
};

export default DialogContainer;