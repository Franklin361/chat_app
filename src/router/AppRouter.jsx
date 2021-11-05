import React, { Suspense } from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

const AuthenticationPage = React.lazy(() => import('../pages/AuthenticationPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));

export const AppRouter = () => {
    return (

        <Routes>
            <Route path="/auth"
                element={
                    <Suspense fallback={<div>...Espere...</div>}>
                        <AuthenticationPage />
                    </Suspense>
                }
            />

            <Route path="/home"
                element={
                    <Suspense fallback={<div>...Espere...</div>}>
                        <HomePage />
                    </Suspense>
                }
            />

            <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
    )
}
