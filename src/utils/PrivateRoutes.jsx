import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import NavBar from "../pages/nav/NavBar";

const PrivateRoutes = () => {
	const isLoggedIn = useSelector(state => state.user.loggedIn);
	return isLoggedIn ? <><NavBar/> <Outlet /></> : <Navigate to="/login" />;
};

export default PrivateRoutes;
