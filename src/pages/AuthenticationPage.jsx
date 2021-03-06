import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { BiLogIn, BiUserCircle } from "react-icons/bi";
import { FiAtSign } from "react-icons/fi";
import { AuthContext } from '../auth/AuthContext';
import { validForm } from '../helpers/validForm';
import { useForm } from '../hooks/useForm';


const initialState = {
    nombre: '', password: '', email: '', recordar: false
}

const AuthenticationPage = () => {

    
    const [isCreateANewAccount, setIsCreateANewAccount] = useState(false);
    const [error, setError] = useState(true);
    const { onChange, nombre, password, email, recordar, setForm, resetForm, form} = useForm( initialState);
    const { login, register } = useContext(AuthContext)

    const handleAuthentication = (e) => {
        e.preventDefault();

        (recordar)
            ? localStorage.setItem('email', email)
            : localStorage.removeItem('email', email);

        (isCreateANewAccount)
            ? handleCreateAccount()
            : handleLogin();
    };

    const handleCreateAccount = async () => register(nombre, email, password)

    const handleLogin = async () => login(email, password);

    useEffect(() => {
        setError(validForm(isCreateANewAccount, form))
    }, [form]);

    useEffect(() => {
        resetForm()
    }, [isCreateANewAccount]);


    useEffect(() => {
        const email = localStorage.getItem('email');
        if(email){
            setForm({
                ...form,
                recordar:true,
                email
            })
        }
    }, []);


    return (
        <>
            <h3 className={`title ${(!isCreateANewAccount) ? 'title_margin_lg' : 'title_margin_sm'}`}>
                {(!isCreateANewAccount) ? 'Inicio de sesión' : 'Crear una nueva cuenta'}
            </h3>

            <form
                className={`formulario ${(isCreateANewAccount) ? 'fade_inup' : 'fade_indown'}`}
                onSubmit={handleAuthentication}
            >

                {
                    (isCreateANewAccount) &&
                    <div className="container_input">
                        <label htmlFor="nombre">Nombre</label>
                        <div className="input_icon">
                            <AiOutlineUser className="icon" />
                            <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                placeholder="Ingresa tú nombre"
                                required
                                onChange={onChange}
                                value={nombre}
                            />
                        </div>
                    </div>
                }

                <div className="container_input">
                    <label htmlFor="email">Correo electronico</label>
                    <div className="input_icon">
                        <FiAtSign className="icon" />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@example.com"
                            required
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                </div>

                <div className="container_input">
                    <label htmlFor="password">Contraseña</label>
                    <div className="input_icon">
                        <AiOutlineLock className="icon" />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="***********"
                            required
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                </div>

                {
                    (!isCreateANewAccount) && 
                    <div className="container_input check">
                        <label htmlFor="recordarme" className="check_label">
                            <input type="checkbox" id="recordarme" name="recordar" onChange={onChange} checked={recordar} />
                            Recordar mi inicio de sesión
                            <i></i>
                        </label>
                    </div>
                }

                <div className="container_label_link">
                    <span onClick={() => setIsCreateANewAccount(!isCreateANewAccount)} >

                        {
                            (!isCreateANewAccount) ? '¿Aún no tienes cuenta?' : '¿Ya tienes una cuenta?'
                        }
                    </span>
                </div>

                <button type="submit" className="btn_login" disabled={!error}>
                    <span>{(isCreateANewAccount) ? 'Crear cuenta' : 'Ingresar'}</span>
                    {
                        (isCreateANewAccount) ? <BiUserCircle className="icon" /> : <BiLogIn className="icon" />
                    }
                </button>
            </form>

        </>
    )
}

export default AuthenticationPage