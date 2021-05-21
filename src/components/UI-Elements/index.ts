import React from 'react';
import styled, { StyledFunction as Function } from 'styled-components';

interface DefaultProps {
  color?: string;
  hoverColor?: string;
  background?: string;
  src?: any;
  width?: string;
  height?: string;
  border?: string;
  borderColor?: string;
  radius?: string;
  fontsize?: string;
  placeholder?: string;
  type?: string;
}

const colorDefault: string = '#000000';
const backGroundDefault = 'papayawhip';

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  background-color: #fff;
  align-items: center;

  margin: 30px auto;
  cursor: default;

  h1 {
    font-size: 50px;
    margin-top: 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
`;

export const Button = styled.button<DefaultProps>`
  display: inline-block;
  padding: 15px 32px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: ${(props) => props.fontsize || '1em'};
  margin: 1em;
  padding: 0.25em 1em;
  color: ${(props) => props.color || colorDefault};
  background-color: ${(props) => props.background};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.radius || '0'};
  text-align: center;
  align-items: center;
  text-decoration: none;
  width: ${(props) => props.width || '150px'};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverColor || '#4caf50'}; /* Green */
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    color: white;
  }
`;
export const Input = styled.input.attrs<DefaultProps>({})`
  box-sizing: border-box;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: ${(props: DefaultProps) => props.fontsize || '16px'};
  padding: 2px 5px;
  border: 1px solid green;
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props: DefaultProps) => props.color || colorDefault};
  background: ${(props: DefaultProps) => props.background || backGroundDefault};
  border-width: ${(props: DefaultProps) => props.border || 'none'};
  border-color: ${(props: DefaultProps) => props.borderColor || colorDefault};
  border-radius: ${(props: DefaultProps) => props.radius};
  width: ${(props: DefaultProps) => props.width};
  height: ${(props: DefaultProps) => props.height};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.hoverColor || '#4caf50'}; /* Green */
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  position: relative;

  & > input {
    border: 1px solid #eee;
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
  }
  & > label {
    color: #757575;
    position: absolute;
    top: 15px;
    left: 15px;
    transition: all 0.2s ease;
    z-index: 500;
  }
`;

//   type: 'password',
//   placeholder: 'Type your password here...',
// })`
//   font-size: 14px;
//   padding: 2px 5px;
//   border: 1px solid green;
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${(props) => props.color || colorDefault};
//   background: papayawhip;
//   border: 1px;
//   border-radius: ${(props) => props.radius};
//   width: ${(props) => props.width};
//   height: ${(props) => props.height};
// `;
// export const Input = styled.div<InputProps>`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${(props) => props.color || colorDefault};
//   background: papayawhip;
//   border: 1px;
//   border-radius: ${(props) => props.radius};
//   width: ${(props) => props.width};
//   height: ${(props) => props.height};
//   outline-style: solid;
// `;

export const BarHeader = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.color || colorDefault};
`;
export const CheckBox = styled.input<DefaultProps>``;
export const RadioButton = styled.input<DefaultProps>``;
export const Select = styled.input<DefaultProps>``;
export const Panel = styled.div<DefaultProps>`
  font-family: Helvetica, sans-serif;
  background-color: ligthgray;
  -webkit-font-smoothing: antialiased;
`;
export const Card = styled.div<DefaultProps>``;
export const Alert = styled.div<DefaultProps>``;
export const Header = styled.div<DefaultProps>`
  padding: 0.5em;
  margin: 0.5em auto;
  color: ${(props) => props.color || colorDefault};
  background: ${(props) => props.background || 'papayawhip'};
  border: none;
  font-size: 20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const Footer = styled.div<DefaultProps>``;
