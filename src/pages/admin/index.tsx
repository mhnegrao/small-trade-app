import React, { Component } from 'react';

//@ts-ignore
import SweetAlert from 'sweetalert2-react';

const Admin = () => {

  let show=false;
  const handleClick = () =>{
    show=!show;console.log(show);

  }show;
    return (
        <>
            <h1>Administração</h1>
            <div>
      <button onClick={handleClick}>Alert</button>
      
      <SweetAlert
        show={show}
        title="Demo"
        text="SweetAlert in React"
        onConfirm={() => !show}
      />
    </div>
        </>
    );
};

export default Admin;