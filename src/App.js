import React, { Component } from 'react';
import './App.css';
import LoganMap from './Components/LoganMap';
import BottomNav from './Components/BottomNav';
import Sidebar from './Components/SideBar';

class App extends Component {
constructor(){
  super();
  this.state = { 
    markerData: [{
    placeName: "Dantes Pizza",
    marker: [41.932614, -87.712855],
    id: 0,
    phone: "(773) 342-0002",
    group: "restaurant"
  },
  {
    placeName: "longmen",
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
  },],
    filteredMarkerData: [{
      placeName: "Dantes Pizza",
      marker: [41.932614, -87.712855],
      id: 0,
      phone: "(773) 342-0002",
      group: "restaurant"
    },
    {
      placeName: "longmen",
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
    },],
    currentPicture: "",
    sideBarBoxCount: 0,

  }
}


componentDidMount() {
  let markerData = this.state.filteredMarkerData
  for(let name of markerData) {
  //need to parse for url
  let tag = name.placeName.replace(/\s/g, '+')
  let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=910c86cfceb261a7928b1081a20ada65&text=${tag}&format=json&nojsoncallback=1`
  fetch(url).then(function(response) {
  console.log('Fetching... you made a call!')  
  return response.json()
  })
	.then(function(value) {
    let pic = value.photos.photo[0]
    if(pic === "undefined") {
      console.log(value + ' produces undefined')
    } else {
      let srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg'
      let picture =  <img alt={pic.title} src={srcPath} className={'flickr-photo'} ></img>
      this.setState( {currentPicture: picture} )
    }
  }.bind(this))

  }  
}
  
  
filterMarkerData = (groupName) => {
    let filtered = this.state.markerData.filter(element => groupName === element.group);
    this.setState( {filteredMarkerData: filtered} )
  }



getFlickrPics = (location) => {
  let parsedLocation = this.parseLocation(location)
  console.log(parsedLocation)
}

  render() {
    return (
      <div className="app">
      <div className="wrapper">
      <Sidebar currentPicture = {this.state.currentPicture} />
      <LoganMap filteredMarkerData={this.state.filteredMarkerData} getFlickrPics={this.getFlickrPics} />
      </div>
      <BottomNav filterMarkerData={this.filterMarkerData} />
      </div>
    );
  }
}

export default App;
