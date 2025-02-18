import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/login/LoginPage";

//import { store } from "./state/store";


//This allows us to import font awesome icons and reference them 
//globally rather than having to import them over and over again in
//each component individually. 
import { library } from "@fortawesome/fontawesome-svg-core";
//import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
//import { Provider } from "react-redux";

library.add(faHeartPulse);

//This line creates the router.
const router = createBrowserRouter(
	//This creates a route from a provided component.
	createRoutesFromElements(<Route index element={<LoginPage />} />)
);

function App() {
	return (
		//useDispatch was giving me an issue on the login page without the RouterProvider being wrapped 
		//by the Provider component from react-redux. 
		//<Provider store={store}>
		<>
			<RouterProvider router={router} />
		</>
		//</Provider>
	);
}

export default App;
