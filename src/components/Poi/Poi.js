import React, { Component } from 'react';
import Poi from '../../images/poi.png';


class Map extends Component {
    render() {
        return (
            <div>
                <img src={Poi} alt="POI" />
            </div>
        );
    }
}

export default Map;
