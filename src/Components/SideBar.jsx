import React from 'react';
import '../App.css';
import SideBarPicture from '../Components/SideBarPicture';

class SideBar extends React.Component {
   
    makeNewSideBar() {
        this.props.sideBarBoxCreated()
        return ( 
         <SideBarPicture picturesArray = {this.props.picturesArray}></SideBarPicture>
        )
    }
    
    render() {
        return (
        <div className= 'side-bar-box'>
            {this.props.createSideBarBox ?  this.makeNewSideBar() : null}
            <SideBarPicture picturesArray = {this.props.picturesArray}></SideBarPicture>
            <SideBarPicture picturesArray = {this.props.picturesArray}></SideBarPicture>
        </div>
    )
 }
}

export default SideBar