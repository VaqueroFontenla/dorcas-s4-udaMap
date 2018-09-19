import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { PopUp, TitlePopup, TextStyle, Operation, TextStyleBold, PopUpTxt } from './styleLMap'
import PropTypes from 'prop-types';

class LMap extends Component {
  render() {
    const MapStyle = this.props.styles;
    const {
      address,
      operation,
      uDAVALUE
    } = this.props.data;
    const position = [this.props.coordinates.lat, this.props.coordinates.lon]
    const iconMarker = new L.Icon({
      iconUrl: require('../../images/poi.png'),
      iconSize: [50, 58],
      iconAnchor: [25, 50]
    })

    let operationPopUp;
    if (operation === 0) {
      operationPopUp = 'Rent'
    } else if (operation === 1) {
      operationPopUp = 'Sale'
    } else {
      return null;
    }

    return (
      <Map style={MapStyle} center={position} zoom={this.props.coordinates.zoom}>
        <TileLayer attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={iconMarker}>
          <Popup>
            <div style={PopUp}>
              <div style={TitlePopup}>
                <span>Information</span>
              </div>
              <div style={PopUpTxt}>
                <div>
                  <span
                    style={TextStyleBold}
                  >
                    Address:
                                    </span>
                  <span
                    style={TextStyle}
                  >
                    {address}
                  </span>
                </div>
                <div>
                  <span
                    style={TextStyleBold}
                  >
                    udaValue:
                                    </span>
                  <span
                    style={TextStyle}
                  >
                    {uDAVALUE}
                  </span>
                  <span
                    style={TextStyleBold}
                  >
                    €
                                    </span>
                </div>
                <div>
                  <span
                    style={TextStyleBold}
                  >
                    Operation:
                                    </span>
                  <span
                    style={Operation}
                  >
                    {operationPopUp}
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

LMap.propTypes = {
  address: PropTypes.string,
  udaValue: PropTypes.number,
  operation: PropTypes.number,
  styles: PropTypes.object,
  position: PropTypes.array,
  zoom: PropTypes.number,
  Map: PropTypes.element,
  TileLayer: PropTypes.element,
  Mark: PropTypes.element,
  PopUp: PropTypes.element
}

export default LMap;