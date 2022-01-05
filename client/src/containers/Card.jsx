import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import TarotShow from '../components/TarotShow'
export default function Card() {


    const {id} = useParams()
    const [card, setCard] = useState({})

    useEffect(() => {
        if(id){
            fetch(`/api/cards/${id}`)
            .then(resp => {
                if (resp.ok) {
                    resp.json().then(setCard)
                } else {
                    resp.json(({errors}) => alert(errors))
                }
            })
        }
    }, [id])


    return (
        <div>
           {!!card.id && <TarotShow card={card}/>}
        </div>
    )
}
