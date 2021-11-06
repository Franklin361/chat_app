import React from 'react'
import avatar from '../../assets/user.png';
import { fetchWhitToken } from '../../helpers/fetch';
import { scrollToBottomAction } from '../../helpers/scrollAction';
import { useChatContext } from '../../hooks/useChatContext';
import { chatTypes } from '../../types/chatTypes';

export const SideBarItem = ({user}) => {
    
    const { dispatch, chatState } = useChatContext()

    const handleSelectingChat = async() => {
        dispatch({
            type: chatTypes.activeChat,
            payload: user.uid
        });

        const res = await fetchWhitToken(`/mensajes/${ user.uid }`);

        dispatch({
            type: chatTypes.cargarChat,
            payload: res.mensajes
        });

        scrollToBottomAction('container_messages_chat', 0)
    };

    return (
        <div 
            className={`container_user ${ (chatState.chatActivo === user.uid) && 'activo' }`} 
            onClick={handleSelectingChat}
        >

            <div className="avatar">
                <div className="img_avatar">
                    <img src={avatar} width={100} alt="avatar" />
                </div>
            </div>

            <div className="info_user">
                <p>{user.nombre}</p>
                <span className={`${ (user.online) ? 'online' : 'offline' }`}>
                    {
                        (user.online) ? 'Online' : 'Offline'
                    }
                </span>
            </div>
        </div>
    )
}
