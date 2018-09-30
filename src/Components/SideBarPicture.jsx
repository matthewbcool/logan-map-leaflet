import React from 'react'
import '../App.css'


class SideBarPicture extends React.Component {
    render() {
        return (
        <div className="side-bar-picture-box">
        {this.props.picturesArray[0]}
        </div>
        )
    }
}

export default SideBarPicture