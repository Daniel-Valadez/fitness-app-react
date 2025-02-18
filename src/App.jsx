import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/login/LoginPage";

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

//This line creates the router.
const router = createBrowserRouter(
	//This creates a route from a provided component.
	createRoutesFromElements(<Route index element={<LoginPage />} />)
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
