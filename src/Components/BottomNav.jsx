import React from 'react'
import '../App.css'
import { FaBullseye } from "react-icons/fa"
import { FaBeer } from 'react-icons/fa'
import { IoIosRestaurant } from "react-icons/io"
import { FiShoppingBag } from "react-icons/fi"
import { MdDirectionsRun } from "react-icons/md"

const BottomFilters = () => {
    return (
        <div className= 'bottom-filter-box'>
        <FaBullseye className="filter-icons" />
        <IoIosRestaurant className="filter-icons" />
        <FaBeer className="filter-icons" />
        <FiShoppingBag className="filter-icons" />
        <MdDirectionsRun className="filter-icons" />
        </div>
    )
}

export default BottomFilters