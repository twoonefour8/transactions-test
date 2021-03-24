export const FETCH_ADDRESSES: string = 'FETCH_ADDRESSES'
export const FETCH_TRANSACTIONS: string = 'FETCH_TRANSACTIONS'

export const BASE_URL:string = 'http://0.0.0.0:8000'
export const ADDRESSES_URL: string = `${BASE_URL}/api/addresses`
export const TRANSACTIONS_URL: string = `${BASE_URL}/api/get-transactions`
export const ADDRESS_TRANSACTIONS_URL: string = `${BASE_URL}/api/get-address-transactions`
export const CREATE_ADDRESS_URL: string = `${BASE_URL}/api/create-address`
export const CREATE_TRANSACTION_URL: string = `${BASE_URL}/api/create-address-transaction`
export const CREATE_NEW_TRANSACTION_URL: string = `${BASE_URL}/api/create-transaction`