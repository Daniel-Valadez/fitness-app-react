import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; 

import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import CreateWorkout from "./pages/create/CreateWorkout"; 
import BlogPage from "./pages/blog/BlogPage"; 
import SettingsPage from "./pages/settingsPage/SettingsPage"; 

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

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route element={<PrivateRoutes />}>
					<Route index path="/" element={<HomePage />} />
					<Route path="/create-workout" element={<CreateWorkout />} /> 
					<Route path="/blog" element={<BlogPage />} /> 
					<Route path="/settings" element={<SettingsPage />} /> 
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
