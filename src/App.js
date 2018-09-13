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

  //TODO: FIX SO THIS FUNCTION RUNS ON FIRST CLICK...
  
filterMarkerData = (groupName) => {
    if(groupName !== 'undefined') {
    let filtered = this.state.markerData.filter(element => groupName === element.group)
    this.setState( {filteredMarkerData: filtered} )
    console.log(this.state)
    
    }
  }


  render() {
    return (
      <div className="app">
      <div className="wrapper">
      <Sidebar />
      <LoganMap markerData={this.state.markerData} filteredMarkerData={this.state.filteredMarkerData} />
      </div>
      <BottomNav filterMarkerData={this.filterMarkerData} />
      </div>
    );
  }
}

export default App;
