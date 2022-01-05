import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TarotCard({card}) {
    return (
        <div>
           <NavLink to={`/cards/${card.id}`}><h1>{card.name}</h1> </NavLink>
        </div>
    )
}
