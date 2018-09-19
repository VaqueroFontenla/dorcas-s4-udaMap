import React from 'react';
import ReactDOM from 'react-dom';
import UdaMap from './components/UdaMap/UdaMap';

var coordinatesPoi = {
  lat: 40.4562923,
  lon: -3.6768079,
  zoom: 13
};

var stylesMap = {
  height: '500px',
  minWidth: '320px',
  maxWidth: '1440px'
};

var dataPopup = {
  address: 'Calle Almagro, 20, Madrid',
  operation: 1,
  uDAVALUE: 932.976
};

ReactDOM.render(React.createElement(UdaMap, { styles: stylesMap, coordinates: coordinatesPoi, data: dataPopup }), document.getElementById('root'));