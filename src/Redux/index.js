import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import authReducer from "./auth/reducer"

const RootReducers = combineReducers({
  authReducer,
})

export const store = createStore(RootReducers, applyMiddleware(thunk))
