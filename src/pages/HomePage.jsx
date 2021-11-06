import React from 'react'
import SideBar from '../components/SideBar'
import Chat from '../components/ChatContainer'

const HomePage = () => {
    return (
        <div className="container_home">
            <SideBar />
            <Chat />
        </div>
    )
}

export default HomePage