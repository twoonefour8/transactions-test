import { FETCH_ADDRESSES, FETCH_TRANSACTIONS} from './constants'

export interface IAddress{
    address: string,
    count?: number
}

export interface ITransaction {
    id: number,
    time: string,
    receiver: string
    sender: string,
    money: string
}

export interface ITable {
    headers: string[],
    body?: IAddress[] | ITransaction[]
}

export interface IFetchAddresses {
    type: typeof FETCH_ADDRESSES,
    payload: IAddress[]
}

export interface IFetchTransactions {
    type: typeof FETCH_TRANSACTIONS,
    payload?: ITransaction[]
}


export type FetchEntityActionType = IFetchAddresses | IFetchTransactions
