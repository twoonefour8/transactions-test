import { IFetchTransactions, ITransaction } from '../../types'
import { FETCH_TRANSACTIONS } from '../../constants'

type TransactionState = {
    headers: string[]
    transactions: ITransaction[] | undefined
}
const initialState: TransactionState = {
    headers: ['Время', 'Отправитель', 'Получатель', 'Сумма', ' '],
    transactions: []
}

export const transactionReducer = (state = initialState, action: IFetchTransactions): TransactionState => {
    switch (action.type) {
        case FETCH_TRANSACTIONS:
            return { ...state, transactions: action.payload }

        default:
            return state
    }
}