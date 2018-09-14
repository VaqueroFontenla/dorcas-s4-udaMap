import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

export default class Poi extends React.Component {
    setIcon() {
        const myCustomColor = this.props.backgroundPoiColor;
        let size = parseInt(this.props.size, 10);
        let left = size * -0.5; //Both left and top operations are calculated to put the marker on the same position independently of its size
        let top = (size + (size - 50)) / -2;
        let number;
        if (typeof this.props.numberInPOI !== 'undefined') {
            number = parseInt(this.props.numberInPOI, 10);
            if (number !== 'NaN') { //We only want numbers
                //Styling the number if it's into props
                //Top
                var topNumber = Math.round(parseFloat(size * size * 0.0316));
                //Left
                var leftNumber = '';
                var str = number.toString();
                var res = str.match(/1/g);
                switch (number.toString().length) { // Characters in numberInPOI prop
                    case 1: // For 1 to 9
                        if (res) leftNumber = "3";
                        else leftNumber = "4";
                        break;
                    case 2: // For 10 to 99
                        if (res) {
                            switch (res.length) { // Number of 1's found
                                case 2:
                                    leftNumber = "5";
                                    break;
                                default:
                                    leftNumber = "7";
                            }
                        }
                        else leftNumber = "7";
                        break;
                    case 3: // For 100 to 999
                        if (res) {
                            switch (res.length) { // Number of 1's found
                                case 2:
                                    leftNumber = "9";
                                    break;
                                case 3:
                                    leftNumber = "8";
                                    break;
                                default:
                                    leftNumber = "10";
                            }
                        }
                        else leftNumber = "11";
                        break;
                    case 4: // For 1000 to 9999
                        if (res) {
                            switch (res.length) { // Number of 1's found
                                case 2:
                                    leftNumber = "14";
                                    break;
                                case 3:
                                    leftNumber = "12";
                                    break;
                                case 4:
                                    leftNumber = "10";
                                    break;
                                default:
                                    leftNumber = "15";
                            }
                        }
                        else leftNumber = "15";
                        break;
                    default: // More than 9999
                        leftNumber = "18";
                }
            }
        }

        const markerHtmlStyles = `
            background-color: ${myCustomColor};
            width: ${size}px;
            height: ${size}px;
            display: block;
            left: ${left}px;
            top: ${top}px;
            position: relative;
            border-radius: ${size}px ${size}px 0;
            transform: rotate(45deg);
            border: 1px solid #FFFFFF`

        //Polyfill for IE
        Number.isInteger = Number.isInteger || function (value) {
            return typeof value === "number" &&
                isFinite(value) &&
                Math.floor(value) === value;
        };
        if (typeof this.props.numberInPOI !== 'undefined' && Number.isInteger(number)) {
            const numberHtmlStyles = `
                display: block;
                font-family: gothamBold;
                position: relative;
                top: -${topNumber}px;
                left: -${leftNumber}px;
                color: ${this.props.colorInPOI}`

            const icon = L.divIcon({
                className: "my-custom-pin",
                iconSize: [38, 95],
                iconAnchor: [0, 24],
                labelAnchor: [-6, 0],
                popupAnchor: [0, -36],
                html: `<span style="${markerHtmlStyles}" ></span><span style="${numberHtmlStyles}">${parseInt(this.props.numberInPOI, 10)}</span>`
            });
            return icon;
        }
        else {
            const icon = L.divIcon({
                className: "my-custom-pin",
                iconAnchor: [0, 24],
                labelAnchor: [-6, 0],
                popupAnchor: [0, -36],
                html: `<span style="${markerHtmlStyles}" ></span>`
            });
            return icon;
        }

    }

    render() {
        return (
            <Marker ref={this.props.refPOI} position={this.props.position} icon={this.setIcon()} type={this.props.type} onClick={this.props.onClick}>
                {this.props.children}
                {/*<Popup>
                    <span>{Store.current.addressSearch}<br />
                        <span style={{ display: 'block', textAlign: 'center' }}><b>{getValueWithoutDecimalsIfBiggerThanOneK(Store.current.udaValueML.value)}</b> €</span>
                    </span>
                </Popup>*/}
            </Marker>
        );
    }
}