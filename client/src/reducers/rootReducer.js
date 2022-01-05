import {combineReducers} from "redux"
import usersReducer from "./usersReducer"
import cardsReducer from "./cardsReducer"

const rootReducer = combineReducers({
    usersReducer,
    cardsReducer
})


export default rootReducer