import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex justify-between items-center m-4 p-2 shadow-lg">
			<Link to="/">
				<div className="flex justify-between gap-x-4 items-center">
					<img
						className="w-40 h-28 border border-blue-900"
						alt="app-logo-image"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzy0tqkPJQcNQh6YDF00Ei7jOaG6blHCw-g&usqp=CAU"
					/>
					<h1 className="font-bold text-blue-900 text-2xl">HealthApp</h1>
				</div>
			</Link>
			<div>
				<ul className="flex justify-between items-center gap-x-4 text-blue-900 font-semibold">
					<Link to="/login">
						<li>Login</li>
					</Link>
					<li>Manage Account</li>
					<li>Devices</li>
					<li>Medicines</li>
					<li>Reports</li>
					<li>Notifications</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
