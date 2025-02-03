import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/login/LoginPage";


//This line creates the router.
const router = createBrowserRouter(
  //This creates a route from a provided component.
  createRoutesFromElements(
  <Route
    index
    element={<LoginPage />}
  />
) 
)

function App() {
	return (
  <>
    <RouterProvider router={router} /> 
  </>
);
}

export default App;
