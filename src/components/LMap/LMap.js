import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { PopUp } from './styleLMap.js';


class LMap extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const MapStyle = this.props.styles;
    const position = [this.props.coordinates.lat, this.props.coordinates.lon]
    console.log(MapStyle)
    return (
      <Map style={MapStyle} center={position} zoom={this.props.coordinates.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div style={PopUp}>
              <span>Dirección<br />
                <span style={{ display: 'block', textAlign: 'center' }}><b>Precio</b> €</span>
              </span>
            </div>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default LMap;
