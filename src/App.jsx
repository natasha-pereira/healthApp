import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import FruitNutrition from "./components/FruitNutrition";
import Devices from "./components/Devices";
import Medicines from "./components/Medicines";

const App = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/fruitNutition",
				element: <FruitNutrition />,
			},
			{
				path: "/devices",
				element: <Devices />,
			},
			{
				path: "/medicines",
				element: <Medicines />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
