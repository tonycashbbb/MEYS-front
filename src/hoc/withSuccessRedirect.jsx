import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const withSuccessRedirect = (Component) => {

  const SuccessRedirect = (props) => {
    if (props.isSuccess) {
      return <Redirect to={'/success'}/>
    }

    return <Component {...props}/>
  };

  return connect(mapStateToProps, {})(SuccessRedirect);
};

const mapStateToProps = (state) => ({
  isSuccess: state.accountPage.isSuccess
})


