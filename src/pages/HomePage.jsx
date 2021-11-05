import React from 'react'

import { FiLogOut, FiSend } from 'react-icons/fi';
import { AiOutlineMessage, AiOutlineMenu } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';

import avatar from '../assets/user.png'

const HomePage = () => {
    return (
        <div className="container_home">

            <label htmlFor="menu_check" className="menu_btn">
                Menu
                <AiOutlineMenu />
            </label>

            <input type="checkbox" className="menu_check" id="menu_check" />
            <div className="overlay"></div>
            <div className="bandeja_chats">
                <header>
                    <span>Franklin Martinez Lucas</span>
                    <button>
                        <span>Salir</span>
                        <FiLogOut />
                    </button>
                </header>

                <section className="section_users">

                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>
                    <div className="container_user">

                        <div className="avatar">
                            <div className="img_avatar">
                                <img src={avatar} width={100} alt="avatar" />
                            </div>
                        </div>

                        <div className="info_user">
                            <p>Marco Fabian</p>
                            <span className="online">Online</span>
                        </div>
                    </div>

                </section>
            </div>


            <div className="chat_container">

                {/* <div className="no_mensajes">
                    <p>Seleccione una persona</p>
                    <p>Para comenzar una conversación</p>
                    <div className="container_icon">
                        <AiOutlineMessage className="icon"/>
                    </div>
                </div> */}

                <div className="flex_container">
                    <div className="container_messages_chat">

                        <div className="mensaje_user">
                            <div className="img_avatar_msg">
                                <img src={avatar} alt="avatar_message" width={100} />
                            </div>
                            <div className="msg_container">
                                <p className="msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aspernatur ducimus? Qui esse reiciendis libero eaque animi alias placeat veniam, recusandae eos omnis tempore beatae repellendus, quo quidem! Deserunt, ad?</p>
                                <div className="hora">
                                    <BiTimeFive className="icon" />
                                    <p>09:27 am | noviembre 10°</p>
                                </div>
                            </div>
                        </div>
                        <div className="mensaje_user">
                            <div className="img_avatar_msg">
                                <img src={avatar} alt="avatar_message" width={100} />
                            </div>
                            <div className="msg_container">
                                <p className="msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aspernatur ducimus? Qui esse reiciendis libero eaque animi alias placeat veniam, recusandae eos omnis tempore beatae repellendus, quo quidem! Deserunt, ad?</p>
                                <div className="hora">
                                    <BiTimeFive className="icon" />
                                    <p>09:27 am | noviembre 10°</p>
                                </div>
                            </div>
                        </div>
                        <div className="mensaje_user">
                            <div className="img_avatar_msg">
                                <img src={avatar} alt="avatar_message" width={100} />
                            </div>
                            <div className="msg_container">
                                <p className="msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aspernatur ducimus? Qui esse reiciendis libero eaque animi alias placeat veniam, recusandae eos omnis tempore beatae repellendus, quo quidem! Deserunt, ad?</p>
                                <div className="hora">
                                    <BiTimeFive className="icon" />
                                    <p>09:27 am | noviembre 10°</p>
                                </div>
                            </div>
                        </div>
                        <div className="mensaje_user">
                            <div className="img_avatar_msg">
                                <img src={avatar} alt="avatar_message" width={100} />
                            </div>
                            <div className="msg_container">
                                <p className="msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aspernatur ducimus? Qui esse reiciendis libero eaque animi alias placeat veniam, recusandae eos omnis tempore beatae repellendus, quo quidem! Deserunt, ad?</p>
                                <div className="hora">
                                    <BiTimeFive className="icon" />
                                    <p>09:27 am | noviembre 10°</p>
                                </div>
                            </div>
                        </div>

                        <div className="mensaje_me">
                            <div className="img_avatar_msg">
                                <img src={avatar} alt="avatar_message" width={100} />
                            </div>
                            <div className="msg_container">
                                <p className="msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aspernatur ducimus? Qui esse reiciendis libero eaque animi alias placeat veniam, recusandae eos omnis tempore beatae repellendus, quo quidem! Deserunt, ad?</p>
                                <div className="hora_me">
                                    <p>09:27 am | noviembre 10°</p>
                                    <BiTimeFive className="icon" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <form className="formulario_chat">
                        <textarea name="" placeholder="Mensaje..." />
                        <button type="submit">
                            <span>Enviar</span>
                            <FiSend className="icon" />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default HomePage