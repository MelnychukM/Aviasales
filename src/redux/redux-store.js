import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

import ticketsReducer from './tickets-reducer'
import filterReducer from './filter-reducer'


let reducers = combineReducers({
    ticketsData: ticketsReducer,
    form: formReducer,
    filterData: filterReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)
));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

window.store = store