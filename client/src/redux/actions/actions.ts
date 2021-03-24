import { ADDRESSES_URL, FETCH_ADDRESSES, FETCH_TRANSACTIONS } from '../../constants'
import { FetchEntityActionType, IAddress, ITransaction } from '../../types'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

export const http = (url: string, method: string = 'get', body: string | null = null) => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
        const response = await fetch(url, {method, body})
        const json = await response.json()
        switch (url) {
            case ADDRESSES_URL:
                dispatch(fetchAddresses(json))
                break
            default:
                dispatch(fetchTransactions(json))
                break
        }
    }
}

export const fetchAddresses = (addresses: IAddress[]): FetchEntityActionType => {
    return { type: FETCH_ADDRESSES, payload: addresses }
}

export const fetchTransactions = (transactions: ITransaction[]): FetchEntityActionType => {
    return { type: FETCH_TRANSACTIONS, payload: transactions }
}