import React from 'react'
import '../App.css'


class SideBarPicture extends React.Component {
    render() {
        return (
        <div className="side-bar-picture-box">
        {this.props.currentPicture}
        </div>
        )
    }
}

export default SideBarPicture