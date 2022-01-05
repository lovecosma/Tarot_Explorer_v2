import React from 'react'

export default function TarotShow({card}) {
    return (
        <div>
            <h1>{card.name}</h1>
            <h2>{card.card_type}</h2>
            <h3>{card.value_int}</h3>
            <p>{card.desc}</p>
            <p>{card.meaning_up}</p>
            <p>{card.meaning_rev}</p>
        </div>
    )
}
