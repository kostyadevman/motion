import React from 'react';

const Main = ({...props}) => {
  return (
    <main className="main container">
      <h1 className="main__title visually-hidden">Ход</h1>
        {props.children}
    </main>
  );
};


export default Main;

