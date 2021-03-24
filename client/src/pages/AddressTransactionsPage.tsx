import React, { Dispatch, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TableItem } from '../components/table'
import { NavbarItem } from '../components/navbar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/reducers/root.reducer'
import { http } from '../redux/actions/actions'
import { ADDRESS_TRANSACTIONS_URL, CREATE_TRANSACTION_URL } from '../constants'
import { Button } from 'react-bootstrap'

export const AddressTransactionsPage: React.FC = () => {
    const address = useParams<string>()
    const dispatch: Dispatch<any> = useDispatch()
    const { transactions, headers } = useSelector((state: RootState) => state.transactionReducer)

    useEffect(() => {
        dispatch(http(ADDRESS_TRANSACTIONS_URL, 'post', JSON.stringify(address)))
    }, [])

    const createTransaction = () => {
        dispatch(http(CREATE_TRANSACTION_URL, 'post', JSON.stringify(address)))
        location.assign('/transactions')
    }

    return (
        <>
            <NavbarItem />
            <Button className={'create-btn'} variant={'info'} onClick={createTransaction}>+</Button>
            <TableItem headers={headers} body={transactions} />
        </>

    )
}