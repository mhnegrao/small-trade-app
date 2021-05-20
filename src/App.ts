import React from 'react';
import './App.css';
import Button from './components/button';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Small Trade App</h1>
        <p>
          Plataforma para Administração de pequenos Comércios
        </p>

        <Button
          border="none"
          color="pink"
          height="10px"
          onClick={() => console.log("You clicked on the pink circle!")}
          radius="50%"
          width="50px"
          label="I'm a pink circle!"
        />
        <Login />

      </header>
    </div>
  );
}

export default App;
