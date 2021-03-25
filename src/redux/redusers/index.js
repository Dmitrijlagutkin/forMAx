import { createStore, applyMiddleware, combineReducers } from 'redux'
import {composeWithDevTools}  from "redux-devtools-extension"
import dataReducer from "./dataReducer"

const rootReduser = combineReducers({
    data: dataReducer
})


export const store = createStore(
  rootReduser,
  composeWithDevTools()
)
