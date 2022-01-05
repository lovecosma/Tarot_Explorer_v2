import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {signup} from "../actions/user"
import {useNavigate} from "react-router-dom"

export default function Signup() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(dispatch, formData)
        navigate("/cards")
    }

    const handleChange = (e) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }



    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} type="text" name="username" id="username" value={formData.username}/>
                <label htmlFor="paswword">Password:</label>
                <input onChange={handleChange} type="password" name="password" id="password" value={formData.password}/>
                <button type="submit">signup</button>
            </form>
        </div>
    )
}
