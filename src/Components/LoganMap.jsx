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
    //iterate through state and add markers here -- maybe
    const markerList = this.props.markerData.map(marker => marker.marker);
    markerList.forEach(element => this.marker = L.marker(element).addTo(this.map))
  }
  
  render() {
    return <div id="map">{}</div>
  }
}
export default LoganMap;