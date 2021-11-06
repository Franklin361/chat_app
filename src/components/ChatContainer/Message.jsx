import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import avatar from '../../assets/user.png'
import { getTimeMessage } from '../../helpers/getTimeCreatedMessage'



export const Message = ({ isIncoming=false, mensaje }) => {

    const { mensaje:text_mensaje, createdAt} = mensaje
    
    return (
        <div className={`${ (isIncoming) ? 'mensaje_user' : 'mensaje_me' }`} >
        <div className="img_avatar_msg">
            <img src={avatar} alt="avatar_message" />
        </div>
        <div className="msg_container">
            <pre className="msg">{text_mensaje}</pre>
            <div className={`${ (isIncoming) ? 'hora' : 'hora_me' }`} >
                <p>{getTimeMessage(createdAt) }</p>
                <BiTimeFive className="icon" />
            </div>
        </div>
    </div>
    )
}
