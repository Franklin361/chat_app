import  { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const useContextUserAuth = () => {

    const {auth, logout} = useContext(AuthContext)
    
    return {
        ...auth,
        logout
    }
}
