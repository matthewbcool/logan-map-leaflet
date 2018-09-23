import React, { Component } from 'react';
import './App.css';
import LoganMap from './Components/LoganMap';
import BottomNav from './Components/BottomNav';
import Sidebar from './Components/SideBar';

class App extends Component {

  state = {
    markerData: [{
      placeName: "Dantes Pizza",
      marker: [41.932614, -87.712855],
      id: 0,
      phone: "(773) 342-0002",
      group: "restaurant"
    },
    {
      placeName: "Longmen and Eagle",
      marker: [41.930058,-87.707043],
      id: 1,
      phone: "(773) 276-7110",
      group: "restaurant"
    },
    {
      placeName: "Archery Range",
      marker: [41.922770,-87.716930],
      id: 2,
      phone: "(773) 276-7110",
      group: "lifestyle"
    },
    {
      placeName: "Emporium",
      marker: [41.924250,-87.699230],
      id: 3,
      phone: "(773) 276-7110",
      group: "bar"
    },
    {
      placeName: "Illinois Centennial Monument",
      marker: [41.9284,-87.7073],
      id: 4,
      phone: "(773) 276-7110",
      group: "notable"
    },
    {
      placeName: "Uncharted Books",
      marker: [41.929240,-87.708170],
      id: 5,
      phone: "(773) 276-7110",
      group: "store"
    },
    ],
    filteredMarkerData: ''

  }
  
filterMarkerData = (groupName) => {
    let filtered = this.state.markerData.filter(element => groupName === element.group);
    this.setState( {filteredMarkerData: filtered} )
  }
getFlickrPics = () => {
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2eaf3c518771b88959571c18b7606534&text=illinois+centenial+monument&format=json&nojsoncallback=1&auth_token=72157700076897121-7411f96b0eab6ee5&api_sig=d77d4521ae17b64fce852065ca704dec`
  console.log( fetch(url).then(function(response) {
    return response.json();
  }))
}

  render() {
    return (
      <div className="app">
      <div className="wrapper">
      <Sidebar />
      <LoganMap markerData={this.state.markerData} filteredMarkerData={this.state.filteredMarkerData} getFlickrPics={this.getFlickrPics} />
      </div>
      <BottomNav filterMarkerData={this.filterMarkerData} />
      </div>
    );
  }
}

export default App;
