import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { scrollToBottomAction } from '../helpers/scrollAction';
import { useChatContext } from '../hooks/useChatContext';
import { useSocket } from '../hooks/useSocket'
import { chatTypes } from '../types/chatTypes';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {
    
    
    const { socket, online,conectarSocket,desconectarSocket } = useSocket('https://chatserver-mx.herokuapp.com');
    
    const {auth} = useContext(AuthContext)
    const { dispatch } = useChatContext()
    
    useEffect(() => {
        
        if(auth.logged){
            conectarSocket();
        }
    }, [auth]);

    useEffect(() => {
        if(!auth.logged){
            desconectarSocket();
        }
    }, [auth]);


    useEffect(() => {
        socket?.on('lista-usuarios', ( usuarios )=>{
            
            dispatch({
                type: chatTypes.getUsuarios ,
                payload: usuarios 
            })
        })
    }, [socket]);

    useEffect(() => {
        socket?.on('mensaje-personal', ( mensaje )=>{
            dispatch({
                type: chatTypes.nuevoMensaje ,
                payload: mensaje
            });

            scrollToBottomAction('container_messages_chat', 250)
        })
        
    }, [socket])

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}