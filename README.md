# Uda Map

Map React component of Urban Data Analytics.
You can recieve the coordinates from other UDA's components (https://github.com/urbandataanalytics/udaSearchBox) or external components. Ir shows the address that it recieves from other components with a POI (or Marker) in a map. If you click on the POI it will show you de information of that point.

# Getting Started with Uda Map

### Prerrequisites

If you want to use udaMap you need to have an user and a password from pulse, the urban data analytic's tool.

# Props from UDA

The props you can configurate are the following ones:

Props for the map's size


| Prop | type | description |
| ------ | ------ | ------ |
| height | string | map's height |
| maxWidth | string | the maximum width of the map |
| minWidht | string | the minimum width of the map |

The props to configurate to the pop-up are the following ones:

| Prop | type | description |
| ------ | ------ | ------ |
| address | string (Required) | address that you want to show, you can have it from other components |
| operation | number (Required) | operation 0 is rent and operation 1 is rent |
| uDAVALUE | number (Required) | value that the API of uda gives to the place, you can have it from other components |

The coordinate props are:

| Prop | type | description |
| ------ | ------ | ------ |
| lat | number (Required) | latitud |
| lon | number (Required) | longitude |
| zoom | number (Required) | zoom of the map |

# Interesting Data

- If you want to, you can install the udaReport (https://github.com/urbandataanalytics/udaReport) package to have a more complete experience (Link del paquete npm). 
- You can configurate the operation that you want to show in the pop up with sale or rent.
- In this version the props that come from an API are hardcoded

### Tech

* [Leaflet]
* [react-leaflet]
* [ReactJS]
* [ReactDOM]

# Authors
- **Esther Pato** - https://github.com/estherpato 
- **Valeria Roldán** - https://github.com/valromo
- **Loreto Vaquero** - https://github.com/VaqueroFontenla
- **Laura Vargas** - https://github.com/lauraVzarco
