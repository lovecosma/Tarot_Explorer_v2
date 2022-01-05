export const fetchCards = async (dispatch) => {
    let resp = await fetch('/api/cards')
    if (resp.ok) {
        resp.json().then(cards => {
            dispatch({type: "ADDING_CARDS", cards})
        })
    } else {
        resp.json().then(({errors}) => alert(errors))
    }
} 