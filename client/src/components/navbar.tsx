import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarItem: React.FC = () => {
    return (
        <>
            <aside className={'aside'}>
                <div className={'menu'}>
                    <Link to={'/'}>Адреса</Link><br/>
                    <Link to={'/transactions'}>Транзакции</Link>
                </div>
            </aside>
        </>
    )
}