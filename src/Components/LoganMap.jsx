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
    //TO DO: use layerGroup class in leaflet to add this as the default layer...
    let markerData = this.props.markerData;
    markerData.forEach(element => {
      this.marker = L.marker(element.marker).addTo(this.map).bindPopup(element.placeName)
    }
    )
  }

  componentDidUpdate() {
    this.marker = L.marker(this.props.filteredMarkerData[0].marker).addTo(this.map).bindPopup(this.props.filteredMarkerData[0].placeName)
  }
  
  render() {
    return <div id="map">{}</div>
  }
}
export default LoganMap;