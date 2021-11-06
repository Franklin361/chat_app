import React from 'react'
import { useChatContext } from '../../hooks/useChatContext'
import { ChatSelected } from './ChatSelected'
import { NotChatSelected } from './NotChatSelected'

const index = () => {

    const {chatState}=useChatContext()

    return (
        <div className="chat_container">
            {
                (chatState.chatActivo)
                    ? <ChatSelected />
                    : <NotChatSelected />
            }
        </div>
    )
}

export default index
