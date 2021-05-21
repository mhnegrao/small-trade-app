import React from 'react';
import styled from 'styled-components';

interface Props {
  border: string;
  color: string;
  label?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
}

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default Button;
