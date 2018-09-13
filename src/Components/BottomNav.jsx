import React from 'react'
import '../App.css'
import { FaBullseye } from "react-icons/fa"
import { FaBeer } from 'react-icons/fa'
import { IoIosRestaurant } from "react-icons/io"
import { FiShoppingBag } from "react-icons/fi"
import { MdDirectionsRun } from "react-icons/md"

class BottomNav extends React.Component {
    render() {
        return (
        <div className= 'bottom-filter-box'>
        <FaBullseye className="filter-icons" onClick={()=> this.props.filterMarkerData('notable')} />
        <IoIosRestaurant className="filter-icons" />
        <FaBeer className="filter-icons" />
        <FiShoppingBag className="filter-icons" />
        <MdDirectionsRun className="filter-icons" />
        </div>
        )
    }
}

export default BottomNav