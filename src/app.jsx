import React from 'react';
import { hot } from "react-hot-loader";
import i from './images/New look of my terminal.png';
import i2 from './images/production deployable.png';

import './scss/main.scss';

function App(){
  const env=process.env.NODE_ENV;
  return(
    <div>
      <h1>{env}</h1>
      <img src={i} />
      <img src={i2} />
      <h1>We can here you from the stars</h1>
    </div>
  )
}

export default hot(module)(App);