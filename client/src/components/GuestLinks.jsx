import React from 'react'
import {NavLink} from "react-router-dom"


export default function GuestLinks() {
    return (
        <div>
           <li><NavLink to="/">home</NavLink></li> 
           <li><NavLink to="/login">login</NavLink></li> 
           <li><NavLink to="/signup">signup</NavLink></li> 
        </div>
    )
}
