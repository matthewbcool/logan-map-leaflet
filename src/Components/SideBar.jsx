import React from 'react';
import '../App.css';
import SideBarPicture from '../Components/SideBarPicture';

class SideBar extends React.Component {
    render() {
        return (
        <div className= 'side-bar-box'>
         <SideBarPicture></SideBarPicture>
         <SideBarPicture></SideBarPicture>
         <SideBarPicture></SideBarPicture>
         <SideBarPicture></SideBarPicture>
         <SideBarPicture></SideBarPicture>
        </div>
    )
 }
}

export default SideBar