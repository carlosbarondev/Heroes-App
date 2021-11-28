import { Routes, Route, /*BrowserRouter/*, */HashRouter } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (

        // Para desplegar la aplicación en GitHub Pages
        <HashRouter>

            {/* <BrowserRouter> */}

            <Routes>

                <Route
                    path="/login"
                    element=
                    {
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    }
                />

                {/* <Route path="/login" element={<LoginScreen />} /> */}

                <Route
                    path="/*"
                    element=
                    {
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    }
                />

                {/* <Route path="/*" element={<DashboardRoutes />} /> */}

            </Routes>

            {/* </BrowserRouter> */}

        </HashRouter>

    )
}