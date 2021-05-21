import { createGlobalStyle } from 'styled-components';

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
    background-color: navy;
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
