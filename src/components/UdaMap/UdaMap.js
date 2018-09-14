import React, { Component } from 'react';
import LMap from '../LMap/LMap';


class UdaMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { styles, coordinates } = this.props;

    return (
      <div>
        <LMap styles={styles} coordinates={coordinates}/>
      </div>
    );
  }
}

export default UdaMap;
