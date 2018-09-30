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
    picturesArray: [],
    createSideBarBox: false,
  }

 this.sideBarBoxCreated = this.sideBarBoxCreated.bind(this) 
}


componentDidMount() {
  let markerData = this.state.filteredMarkerData
  let picturesArray= [];
  for(let name of markerData) {
  //need to parse for url
  
  let tag = name.placeName.replace(/\s/g, '+')
  let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=910c86cfceb261a7928b1081a20ada65&text=${tag}&lat=41.924250&lon=-87.699230&radius=20&format=json&nojsoncallback=1`
  //API call to get list of pictures from markerdata
  fetch(url).then(function(response) { 
  return response.json()
  })
	.then(function(value) {
    //Check to see if there are pictures and push them to the array. assigning an id that matches the id in markerdata...
    if(value.stat === "fail" || value.photos.photo[0] === undefined) {
      console.log(value + ' produces undefined')
      let picture =  <img id={name.id} alt={"not found"} src={'http://media.gettyimages.com/vectors/no-sign-icon-vector-transparent-vector-id674612468?s=170x170'} className={'flickr-photo'} ></img>
      picturesArray.push(picture)
      this.setState( {picturesArray: picturesArray} )
    } else {
      let pic = value.photos.photo[0]
      let srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg'
      let picture =  <img id={name.id} alt={pic.title} src={srcPath} className={'flickr-photo'} ></img>
      picturesArray.push(picture)
      this.setState( {picturesArray: picturesArray} )
    }
  }.bind(this))
  }  
}
  
  
filterMarkerData = (groupName) => {
    let filtered = this.state.markerData.filter(element => groupName === element.group);
    this.setState( {filteredMarkerData: filtered} )
  }

sideBarBoxCreated = () => {
  this.setState( {createSideBarBox: false} )
}




  render() {
    return (
      <div className="app">
      <div className="wrapper">
      <Sidebar picturesArray = {this.state.picturesArray} sideBarBoxCreated = {this.sideBarBoxCreated} />
      <LoganMap filteredMarkerData={this.state.filteredMarkerData} getFlickrPics={this.getFlickrPics} makeABox={this.sideBarBoxCreated} />
      </div>
      <BottomNav filterMarkerData={this.filterMarkerData} />
      </div>
    );
  }
}

export default App;
