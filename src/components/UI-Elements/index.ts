import React from 'react';
import styled, { StyledFunction as Function } from 'styled-components';

interface DefaultProps {
  color?: string;
  hoverColor?: string;
  backgroundColor?: string;
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
const backGroundDefault = '#ffffd7';

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  background-color: #fff;
  align-items: center;
  margin: 5px auto;
  cursor: default;
  border: 1px;

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
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: ${(props) => props.fontsize || '1em'};
  margin: 1em;
  padding: 0.25em 1em;
  color: ${(props) => props.color || colorDefault};
  background-color: ${(props) => props.backgroundColor};
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
  background: ${(props: DefaultProps) =>
    props.backgroundColor || backGroundDefault};
  border-width: ${(props: DefaultProps) => props.border || 'none'};
  border-color: ${(props: DefaultProps) => props.borderColor || colorDefault};
  border-radius: ${(props: DefaultProps) => props.radius};
  width: ${(props: DefaultProps) => props.width};
  height: ${(props: DefaultProps) => props.height};

  &:hover {
    cursor: text;
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

export const BarHeader = styled.h2<DefaultProps>`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.color || colorDefault};
  background-color: ${(props) => props.backgroundColor || backGroundDefault};
  width: 100%;
`;
export const CheckBox = styled.input<DefaultProps>``;
export const RadioButton = styled.input<DefaultProps>``;
export const Select = styled.input<DefaultProps>``;
export const Panel = styled.div<DefaultProps>`
  font-family: Helvetica, sans-serif;

  -webkit-font-smoothing: antialiased;
  margin-top: 0;
  width: 100%;
  padding: 5px;
`;
export const Card = styled.div<DefaultProps>``;
export const Alert = styled.div<DefaultProps>``;
export const Header = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  margin: 0.5em auto;
  color: ${(props) => props.color || colorDefault};
  /* background-color: ${(props) =>
    props.backgroundColor || backGroundDefault}; */
  border: none;
  font-size: 20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const ListItens = styled.ul<DefaultProps>`
  border-top: 1px solid #eee;
  list-style: none;
  margin-top: 20px;
  li {
    & + li {
      margin-top: 10px;
      border-top: 1px solid #eee;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 15px 10px;
      border-radius: 4px;
      h2 {
        margin-bottom: 5px;
      }

      div {
        display: block;
        margin-left: 5px;
      }
    }
  }
`;
export const Footer = styled.div<DefaultProps>``;
