import  { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

export const useContextSocket = () => {
    const {socket } = useContext(SocketContext)
    return {
        socket
    }
}
