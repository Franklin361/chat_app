import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai'

export const NotChatSelected = () => {
    return (
        <div className="no_mensajes">
            <p>Seleccione una persona</p>
            <p>Para comenzar una conversación</p>
            <div className="container_icon">
                <AiOutlineMessage className="icon" />
            </div>
        </div>
    )
}
