import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useChatContext } from '../../hooks/useChatContext';
import { useContextUserAuth } from '../../hooks/useContextUserAuth';

import { HeaderSideBar } from './HeaderSideBar';
import { SideBarItem } from './SideBarItem';

const index = () => {

    const { chatState } = useChatContext();
    const {uid} = useContextUserAuth()

    return (
        <>
            <label htmlFor="menu_check" className="menu_btn">
                Menu
                <AiOutlineMenu />
            </label>

            <input type="checkbox" className="menu_check" id="menu_check" />
            <div className="overlay"></div>
            <div className="bandeja_chats">

                <HeaderSideBar/>        

                <section className="section_users">
                    {
                        chatState.usuarios.filter( user => user.uid !== uid ).map( user => (
                            <SideBarItem key={user.uid} user={user}/>
                        ))
                    }
                </section>
            </div>
        </>
    )
}

export default index
