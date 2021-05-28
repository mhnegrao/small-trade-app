import { createGlobalStyle } from 'styled-components';
import img from '../images/background4.jpg';
export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;

  }
  html, body, #root{
    min-height: 100%;
  }
  body{
    font-family: Helvetica, sans-serif;
    background-image:url(${img});
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
   
    -webkit-font-smoothing: antialiased;
  }
  a{
    color: #222;
    text-decoration: none;
  }
  a:hover{
    color: #ff9839;
  }
`;
