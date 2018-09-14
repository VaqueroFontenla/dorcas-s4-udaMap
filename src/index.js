import React from 'react';
import ReactDOM from 'react-dom';
import UdaMap from './components/UdaMap/UdaMap';

const coordinatesPoi = {
  lat: 40.4562923,
  lon: -3.6768079,
  zoom: 13
}

const stylesMap = {
  minHeight: '225px',
  maxHeigth:'1020px',
  minWidth: '320px',
  maxWidth:'1440px'
}


ReactDOM.render(<UdaMap styles={stylesMap} coordinates={coordinatesPoi}/>, document.getElementById('root'));
