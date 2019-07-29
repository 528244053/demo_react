import React from 'react';
import ReactDOM from 'react-dom';
import FnTEST from "./components/FnTEST";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FnTEST />, div);
  ReactDOM.unmountComponentAtNode(div);
});
