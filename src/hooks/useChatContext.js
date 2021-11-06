import { useContext } from "react"
import { ChatContext } from "../context/chatContext/ChatContext"


export const useChatContext = () => {
        const { chatState , dispatch } = useContext(ChatContext);

    return {
        chatState , dispatch
    }
}
