var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { PopUp, TitlePopup, TextStyle, Operation, TextStyleBold, PopUpTxt } from './styleLMap';
import PropTypes from 'prop-types';

var LMap = function (_Component) {
    _inherits(LMap, _Component);

    function LMap() {
        _classCallCheck(this, LMap);

        return _possibleConstructorReturn(this, (LMap.__proto__ || Object.getPrototypeOf(LMap)).apply(this, arguments));
    }

    _createClass(LMap, [{
        key: 'render',
        value: function render() {
            var MapStyle = this.props.styles;
            var _props$data = this.props.data,
                address = _props$data.address,
                operation = _props$data.operation,
                uDAVALUE = _props$data.uDAVALUE;

            var position = [this.props.coordinates.lat, this.props.coordinates.lon];
            var iconMarker = new L.Icon({
                iconUrl: require('../../images/poi.png'),
                iconSize: [50, 58],
                iconAnchor: [25, 50]
            });

            var operationPopUp = void 0;
            if (operation === 0) {
                operationPopUp = 'Rent';
            } else if (operation === 1) {
                operationPopUp = 'Sale';
            } else {
                return null;
            }

            return React.createElement(
                Map,
                { style: MapStyle, center: position, zoom: this.props.coordinates.zoom },
                React.createElement(TileLayer, { attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' }),
                React.createElement(
                    Marker,
                    { position: position, icon: iconMarker },
                    React.createElement(
                        Popup,
                        null,
                        React.createElement(
                            'div',
                            { style: PopUp },
                            React.createElement(
                                'div',
                                { style: TitlePopup },
                                React.createElement(
                                    'span',
                                    null,
                                    'Information'
                                )
                            ),
                            React.createElement(
                                'div',
                                { style: PopUpTxt },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'span',
                                        {
                                            style: TextStyleBold
                                        },
                                        'Address:'
                                    ),
                                    React.createElement(
                                        'span',
                                        {
                                            style: TextStyle
                                        },
                                        address
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'span',
                                        {
                                            style: TextStyleBold
                                        },
                                        'udaValue:'
                                    ),
                                    React.createElement(
                                        'span',
                                        {
                                            style: TextStyle
                                        },
                                        uDAVALUE
                                    ),
                                    React.createElement(
                                        'span',
                                        {
                                            style: TextStyleBold
                                        },
                                        '\u20AC'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'span',
                                        {
                                            style: TextStyleBold
                                        },
                                        'Operation:'
                                    ),
                                    React.createElement(
                                        'span',
                                        {
                                            style: Operation
                                        },
                                        operationPopUp
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LMap;
}(Component);

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
};

export default LMap;