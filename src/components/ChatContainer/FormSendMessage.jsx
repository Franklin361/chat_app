import React, { useEffect, useRef } from 'react'
import { FiSend } from 'react-icons/fi'
import { useChatContext } from '../../hooks/useChatContext';
import { useContextSocket } from '../../hooks/useContextSocket';
import { useContextUserAuth } from '../../hooks/useContextUserAuth';
import { useForm } from '../../hooks/useForm'

export const FormSendMessage = () => {
    
    const { onChange, mensaje, resetForm} = useForm({mensaje: ''});
    const { socket } = useContextSocket();
    const { uid } = useContextUserAuth()
    const { chatState } = useChatContext()
    
    const input = useRef();

    useEffect(() => {
        input.current.focus();
    }, [])

    const handleSendMessage = (e) => {
         e.preventDefault();
         
         socket?.emit('mensaje-personal', {
             de: uid,
             para: chatState.chatActivo,
             mensaje,
         })

         resetForm();
         input.current.focus();
    };

    return (
        <form className="formulario_chat">
            <textarea className="input" placeholder="Mensaje..." name="mensaje" value={mensaje} onChange={onChange} ref={input}/>
            {/* <input type="text" className="input" placeholder="Mensaje..." name="mensaje" value={mensaje} onChange={onChange} /> */}

            <button type="submit" onClick={handleSendMessage}>
                <span>Enviar</span>
                <FiSend className="icon" />
            </button>
        </form>
    )
}
