import { applyMiddleware, combineReducers, createStore } from 'redux'
import weatherReducer from "./reducers/weatherReducer";
import thunkMIddleware from 'redux-thunk'

let reducersBatch = combineReducers({
    weatherReducer,
})

let store = createStore(reducersBatch, applyMiddleware(thunkMIddleware))

export default store