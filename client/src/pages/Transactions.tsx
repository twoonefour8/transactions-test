import React, { Dispatch, useEffect } from 'react'
import { NavbarItem } from '../components/navbar'
import { TableItem } from '../components/table'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/reducers/root.reducer'
import { http } from '../redux/actions/actions'
import { CREATE_NEW_TRANSACTION_URL, TRANSACTIONS_URL} from '../constants'
import { Button } from 'react-bootstrap'

export const TransactionsPage: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { transactions, headers } = useSelector((state: RootState) => state.transactionReducer)
    useEffect(() => {
        dispatch(http(TRANSACTIONS_URL))
    }, [])

    const createTransaction = () => {
        dispatch(http(CREATE_NEW_TRANSACTION_URL))
        location.assign('/')
    }

    return(
        <>
            <NavbarItem />
            <Button className={'create-btn'} variant={'info'} onClick={createTransaction}>+</Button>
            <TableItem headers={headers} body={transactions} />
        </>
    )
}