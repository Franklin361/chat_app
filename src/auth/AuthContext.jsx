import { createContext, useCallback, useState } from "react";
import { fetchWhitOutToken, fetchWhitToken } from "../helpers/fetch";
import { useChatContext } from "../hooks/useChatContext";
import { chatTypes } from "../types/chatTypes";



export const AuthContext = createContext({});

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null
}

const resetState = {
    uid: null,
    checking: false,
    logged: false,
    name: null,
    email: null
}


export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);
    const {dispatch} = useChatContext()

    const handleFetchingAuth = async (path, data) => {

        const res = await fetchWhitOutToken(path, data, 'POST');
        if (res?.usuario) {
            
            localStorage.setItem('token', res.token);

            setAuth({
                uid: res.usuario.uid,
                checking: false,
                logged: true,
                name: res.usuario.nombre,
                email: res.usuario.email
            })
        }

        alert(res.msg);   
    };

    const login = async (email, password) => {
        await handleFetchingAuth('/login', {email, password});
    };

    const register = async (nombre, email, password) => {
        await handleFetchingAuth('/login/new', {nombre,email, password})
    };

    const logout = () => {
        // localStorage.removeItem('token');
        dispatch({ type: chatTypes.pugarChat });
        setAuth({
            checking: false,
            logged: false
        });
    };

    const verificarToken = useCallback(async() => {
        
        const token = localStorage.getItem('token');

        if(!token){
            setAuth(resetState);
            return;
        }

       const res = await fetchWhitToken('/login/renew');
       if (res?.usuario) {
           
           localStorage.setItem('token', res.token);

           setAuth({
               uid: res.usuario.uid,
               checking: false,
               logged: true,
               name: res.usuario.nombre,
               email: res.usuario.email
           });

       }else{
        setAuth(resetState) 
       }         

    }, [])

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            logout,
            register,
            verificarToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}
