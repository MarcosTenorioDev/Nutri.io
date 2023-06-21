import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../pages/Home.jsx'

const AppRoutes = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default AppRoutes;