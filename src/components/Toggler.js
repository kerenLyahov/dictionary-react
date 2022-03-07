import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
const Button = styled.button`
  background: ${({ theme }) => theme.background};

  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => "white"};
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  font-family: "Balsamiq Sans", cursive;
  float: right;
  margin: 5px 5px 0 -5px;
`;
const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
