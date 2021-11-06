import { animateScroll } from "react-scroll";

export const scrollToBottomAction = (containerId, duration=0) => {
    
    animateScroll.scrollToBottom({
        containerId,
        duration
    })

};