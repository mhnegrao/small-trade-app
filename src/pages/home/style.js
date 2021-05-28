import styled from 'styled-components';

export const TitleHeader = styled.h2 `
  font-size: 30px;
  font-weight: bold;
`;
export const Start = styled.div ` 
padding: 10px;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  
  align-items: center;
  margin: 30px auto;
.sign-in-ico:hover{
    cursor: pointer;
   
  }`;
export const ButtonBar = styled.button `
  button {
    padding: 10px;
    border-radius: 5px;
    width: 300px;
    margin: 4px;
    margin-top: 30px;
    background-color: #855251;
    color: #fff;
    height: 50px;
    font-size: 18px;
    border: none;
    align-items: center;
  }
  button:hover {
    cursor: pointer;
    background-color: #ff9839;
  }

  
`;