import React from 'react'
import { useDispatch } from 'react-redux'
import {NavLink, useNavigate} from "react-router-dom"
import { logout } from '../actions/user'
export default function UserLinks() {
    const dispatch = useDispatch()
    const nav = useNavigate()

    return (
        <div>
            <li><NavLink to="/cards">cards</NavLink></li>
            <li><a onClick={async (e) => {
                e.preventDefault()
                await logout(dispatch)
                nav('/')
            }}href="/logout">logout</a></li>
        </div>
    )
}
