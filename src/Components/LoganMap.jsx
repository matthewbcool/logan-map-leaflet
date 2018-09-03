import React from 'react';
import L from 'leaflet';



class LoganMap extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [41.9308, -87.7099],
      zoom: 15,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    this.marker = L.marker([41.932614, -87.712855]).addTo(this.map);
  }
  
  render() {
    return <div id="map">{console.log(this.props.markerData.map(marker => marker.placeName))}</div>
  }
}
export default LoganMap;