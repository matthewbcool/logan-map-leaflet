import React from 'react';
import L from 'leaflet';
class LoganMap extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [41.929, -87.71],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }
  render() {
    return <div id="map"></div>
  }
}
export default LoganMap;