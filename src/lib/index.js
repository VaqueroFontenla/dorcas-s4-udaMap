import React from 'react';
import ReactDOM from 'react-dom';
import UdaMap from './components/UdaMap/UdaMap';

const coordinatesPoi = {
  lat: 40.4562923,
  lon: -3.6768079,
  zoom: 13
}

const stylesMap = {
  height: '500px',
  minWidth: '320px',
  maxWidth: '1440px'
}

const dataPopup = {
  address: 'Calle Almagro, 20, Madrid',
  operation: 1,
  uDAVALUE: 932.976
}

ReactDOM.render(<UdaMap styles={stylesMap} coordinates={coordinatesPoi} data={dataPopup} />, document.getElementById('root'));
