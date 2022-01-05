import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchCards} from "../actions/card"
import TarotCard from '../components/TarotCard'

export default function Cards() {

    const dispatch = useDispatch()

    const {cards} = useSelector(({cardsReducer}) => cardsReducer)

    useEffect(() => {
        fetchCards(dispatch)
        
    }, [dispatch])

    return (
        <div>
           <h1>Cards</h1> 
           {cards.map(card => <TarotCard card={card}/>)}
        </div>
    )
}
