import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import FruitNutrition from "./components/FruitNutrition";

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
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
