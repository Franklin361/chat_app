import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useContextUserAuth } from '../../hooks/useContextUserAuth'

export const HeaderSideBar = () => {

    const { name, logout } = useContextUserAuth();

    return (
        <header>
            <span>{name}</span>
            <button onClick={logout}>
                <span>Salir</span>
                <FiLogOut />
            </button>
        </header>
    )
}
