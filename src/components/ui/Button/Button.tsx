import React, {FC} from "react";
import styled from 'styled-components'

type Props = {
  onClick?: (e?: any) => void
  textColor?: string
  textHover?: string
  btnColor?: string
  btnHover?: string
}

const StyledButton = styled.button<Props>`
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

const Button: FC<Props> = ({onClick, ...props}) => {
  return <StyledButton onClick={onClick} {...props}/>
}

export default Button
