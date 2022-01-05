import React from 'react'
import { Route, Routes } from 'react-router'
import Card from './Card'
import Cards from './Cards'

export default function CardsContainer() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Cards/>}></Route>
                <Route path=":id" element={<Card/>}></Route>
            </Routes>
        </div>
    )
}
