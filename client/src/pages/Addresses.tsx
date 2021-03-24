import React, { Dispatch, useEffect } from 'react'
import { TableItem } from '../components/table'
import { NavbarItem } from '../components/navbar'
import { useDispatch, useSelector} from "react-redux"
import { RootState } from '../redux/reducers/root.reducer'
import { http } from '../redux/actions/actions'
import { ADDRESSES_URL, CREATE_ADDRESS_URL } from '../constants'
import { Button } from "react-bootstrap";



export const AddressesPage: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { addresses, headers } = useSelector((state: RootState) => state.addressReducer)

    useEffect(() => {
        dispatch(http(ADDRESSES_URL))
    }, [])

    const createAddress = () => {
        dispatch(http(CREATE_ADDRESS_URL))
        location.assign('/')
    }

    return (
        <>
            <NavbarItem />
            <Button className={'create-btn'} variant={'info'} onClick={createAddress}>+</Button>
            <TableItem headers={headers} body={addresses} />
        </>

    )
}