import { Routes, Route, HashRouter } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <HashRouter>

            <Routes>

                <Route path="/login" element={<LoginScreen />} />

                <Route path="/*" element={<DashboardRoutes />} />

            </Routes>

        </HashRouter>
    )
}