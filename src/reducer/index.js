import { combineReducers } from "redux";
import rootReducer from './reducers'

export default combineReducers({
    counter:rootReducer
})