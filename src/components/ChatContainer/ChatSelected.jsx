import React from 'react'
import { useChatContext } from '../../hooks/useChatContext'
import { useContextUserAuth } from '../../hooks/useContextUserAuth'
import { FormSendMessage } from './FormSendMessage'
import { Message } from './Message'

export const ChatSelected = () => {

    const { chatState } = useChatContext()
    const { uid } = useContextUserAuth();

    return (
        <div className="flex_container">

            <div className="container_messages_chat" id="container_messages_chat">
                {
                    chatState.mensajes.map((msg) => (
                        <Message isIncoming={msg.para === uid} key={msg.uid} mensaje={msg}/>
                    ))
                }
            </div>

            <FormSendMessage />

        </div>
    )
}
