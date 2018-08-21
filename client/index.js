import React from 'react';
import ReactDOM from 'react-dom';

export const PORT = 8080;

import Main from './components/Main';

ReactDOM.render(
  <Main />,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
