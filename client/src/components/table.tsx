import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  { ITable } from '../types'

export const TableItem: React.FC<ITable> = ({ headers, body }) => {
    return (
        <Table hover>
            <thead>
                <tr>{ headers.map(head => <th className={'table-header'} key={head}>{head}</th> )}</tr>
            </thead>
            <tbody>
                {body?.map((item: any) => {
                    if (headers.length < 5) {
                        return (
                            <tr key={item.address} id={item.address}>
                                <td>{item.address}</td>
                                <td>{item.count}</td>
                                <td>
                                    <Link to={'/address/' + item.address}>
                                        Подробнее
                                    </Link>
                                </td>
                            </tr>
                        )
                    }

                    return (
                        <tr key={item.id} id={item.id}>
                            <td>{item.time}</td>
                            <td>{item.sender}</td>
                            <td>{item.receiver}</td>
                            <td>{item.money}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}