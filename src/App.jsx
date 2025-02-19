/* import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Router, 
	Routes, 
} from "react-router-dom"; */ 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";

import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";

import PrivateRoutes from "./utils/PrivateRoutes";

//This allows us to import font awesome icons and reference them
//globally rather than having to import them over and over again in
//each component individually.
import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faHeartPulse,
	faArrowLeft,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHeartPulse, faArrowLeft, faArrowRight);

//import {}

//This line creates the router.
/* const router = createBrowserRouter(
	//This creates a route from a provided component.
	createRoutesFromElements(
		<>
			<Route index element={<LoginPage />} />
		</>
	)
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
} */ 

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} /> 
				
				<Route element={<PrivateRoutes />}>
					<Route index path="/" element={<HomePage />} /> 
				</Route>
			</Routes>
		</Router>
	)
}

export default App;
