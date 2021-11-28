import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 7px 20px;
    width: ${({width}) => width || "200px"};
    border-radius: 10px;
    border: none;

  text-transform: uppercase;

    font-size: ${({fontSize}) => fontSize || "17px"};
    font-weight: 500;
    color: ${({textColor}) => textColor || "#fff"};

    transition: background-color 0.2s linear;

    &:hover {
      color: ${({textHover}) => textHover || "#fff"};
      background-color: ${({btnHover}) => btnHover || "#2F6FDC"};
    }

    background-color: ${props => props.btnColor || "#729ADF"};
  `

const Button = ({onClick, ...props}) => {
  return <StyledButton onClick={onClick} {...props}/>
}

export default Button
