import React from 'react';
import L from 'leaflet';
import '../App.css';


class LoganMap extends React.Component {
  componentDidMount() {
    // create initial map
    this.map = L.map('map', {
      center: [41.9308, -87.7099],
      zoom: 15,
      layers: [
  
      ]
    });
    const defaultLayer = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
    this.map.addLayer(defaultLayer)
  }
  

  componentDidUpdate() {
//removes exsisting map for an update
    this.map.remove()
// redraw map
    this.map = L.map('map', {
      center: [41.9308, -87.7099],
      zoom: 15,
      layers: [

      ]
    });
    const defaultLayer = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
    this.map.addLayer(defaultLayer)
 
    let defaultMarkerArray = [];

    let layerGroup = L.layerGroup().addTo(this.map)
    let filteredMarkerData = this.props.filteredMarkerData
    filteredMarkerData.forEach(element => {
        let currentMarker = L.marker(element.marker/*,{icon: L.icon({
          iconUrl: 'https://unpkg.com/leaflet@1.3.4/dist/images/marker-icon.png',
          className: 'blinking'
        })}*/).bindPopup(element.placeName + "<br>Phone Number: " + element.phone + " </br>").addTo(layerGroup).on("click", function() {
         
      
        })
        defaultMarkerArray.push(currentMarker)
        })   
   // 910c86cfceb261a7928b1081a20ada65  Secret:c01b4c6e0ba0593b
  }
  
  render() {
    return <div id="map">{}</div>
  }
}
export default LoganMap;