import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 7px 20px;
    width: 280px;
    border-radius: 20px;
    border: none;

    font-size: 17px;
    font-weight: 500;
    color: ${({textColor}) => textColor || "#fff"};

    transition: background-color 0.2s linear;

    &:hover {
      color: ${({textHover}) => textHover || "#fff"};
      background-color: ${({btnHover}) => btnHover || "#EEACFF"};
    }

    background-color: ${props => props.btnColor || "#CB9AE1"};
  `

const Button = ({onClick, ...props}) => {
  return <StyledButton onClick={onClick} {...props}/>
}

export default Button
