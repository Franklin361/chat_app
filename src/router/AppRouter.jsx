import React, { Suspense } from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Loading from '../components/Loading'

const AuthenticationPage = React.lazy(() => import('../pages/AuthenticationPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));

export const AppRouter = () => {
    return (

        <Routes>
            <Route path="/auth"
                element={
                    <Suspense fallback={<Loading/>}>
                        <AuthenticationPage />
                    </Suspense>
                }
            />

            <Route path="/home"
                element={
                    <Suspense fallback={<Loading/>}>
                        <HomePage />
                    </Suspense>
                }
            />

            <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
    )
}
