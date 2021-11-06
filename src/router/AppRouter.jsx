import React, { Suspense, useContext, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Loading from '../components/Loading'

const AuthenticationPage = React.lazy(() => import('../pages/AuthenticationPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));


export const AppRouter = () => {

    const { auth, verificarToken } = useContext(AuthContext)

    useEffect(() => {
        verificarToken();
    }, [])

    if(auth.checking){
        return <Loading />
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/auth"
                    element={
                        <Suspense fallback={<Loading />}>
                            {
                                (!auth.logged)
                                    ? <AuthenticationPage />
                                    : <Navigate to="/" />
                            }
                        </Suspense>
                    }
                />

                <Route path="/"
                    element={
                        <Suspense fallback={<Loading />}>
                            {
                                (auth.logged)
                                    ? <HomePage />
                                    : <Navigate to="/auth" />
                            }
                        </Suspense>
                    }
                />

                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter>
    )
}
