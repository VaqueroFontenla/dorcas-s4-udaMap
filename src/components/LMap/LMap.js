import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { PopUp, TitlePopup, TextStyle, Operation, TextStyleBold } from './styleLMap'



class LMap extends Component {

  render() {
    const MapStyle = this.props.styles;
    const data = this.props.data;
    const position = [this.props.coordinates.lat, this.props.coordinates.lon]
    console.log(MapStyle)
    const iconMarker = new L.Icon({
      iconUrl: require('../../images/poi.png'),
      iconSize: [50, 58],
      iconAnchor: [25, 50],
    })

    let operation;
    if (data.operation === 0) {
      operation = 'Rent'
    } else if (data.operation === 1) {
      operation = 'Sale'
    } else {
      return null;
    }

    return (
      <Map style={MapStyle} center={position} zoom={this.props.coordinates.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={iconMarker}>
          <Popup>
            <div style={PopUp}>
              <div style={TitlePopup}>
                <span>
                  Information
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                <div>
                  <span style={TextStyleBold}>
                    Address:
                  </span>
                  <span style={TextStyle}>
                    {data.address}
                  </span>
                </div>
                <div>
                  <span style={TextStyleBold}>
                    udaValue:
                  </span>
                  <span style={TextStyle}>
                    {data.uDAVALUE}
                  </span>
                  <span style={TextStyleBold}>
                    €
                  </span>
                </div>
                <div>
                  <span style={TextStyleBold}>
                    Operation:
                  </span>
                  <span style={Operation}>
                    {operation}
                  </span>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default LMap;
