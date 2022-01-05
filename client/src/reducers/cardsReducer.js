const cardsReducer = (state={cards: []}, action) => {
    switch (action.type) {
        case "ADDING_CARDS":
            return {
                ...state,
                cards: action.cards
            }
        default:
            return state
    }
}


export default cardsReducer
