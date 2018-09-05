import React from 'react';
import ReactDOM from 'react-dom';
import UdaMap from './UdaMap';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UdaMap />, document.getElementById('root'));
registerServiceWorker();
