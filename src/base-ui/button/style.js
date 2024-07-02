import styled from "styled-components";

export const ButtonWrapper = styled.span`
  display: inline-block;
  padding: 12px;
  border-radius: 22px;
  cursor: pointer;

  &.hover:hover {
    background-color: ${props => !props.isAlpha ? 'rgb(247,247,247)': 'rgba(255,255,255,.15)'};
  }
`