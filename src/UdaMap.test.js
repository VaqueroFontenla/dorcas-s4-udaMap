import React from 'react';
import ReactDOM from 'react-dom';
import UdaMap from './UdaMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UdaMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});
