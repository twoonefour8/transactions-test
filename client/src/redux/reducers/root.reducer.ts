import { combineReducers } from 'redux'
import { addressReducer } from './address.reducer'
import { transactionReducer } from "./transaction.reducer";

const rootReducer = combineReducers({
    addressReducer,
    transactionReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>