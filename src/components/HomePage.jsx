import { Link } from "react-router-dom";
import { details } from "../utils/Details";

const HomePage = () => {
	return (
		<div className="mx-4 my-2 p-2 flex flex-col">
			<h1>Hi, Sunita Sharma</h1>
			<p className="my-4">
				Find your medical details and history here. Please login to see your
				details and keep track of all your medicines and smart wearables and
				devices.
			</p>
			<div className="my-4 flex justify-around gap-x-8">
				<ul className="flex flex-col grow-[3] text-blue-900">
					<li className="w-full h-10 shadow-inner p-2 my-2">
						Add medical report
					</li>
					<li className="w-full h-10 shadow-inner p-2 my-2">
						Add Smart device / wearable
					</li>
					<li className="w-full h-10 shadow-inner p-2 my-2">Add medicines</li>
					<li className="w-full h-10 shadow-inner p-2 my-2">
						Add Emergency numbers
					</li>
					<li className="w-full h-10 shadow-inner p-2 my-2">Add Doctor</li>
					<li className="w-full h-10 shadow-inner p-2 my-2">
						Find Nearby Hospitals
					</li>
				</ul>
				<div className="flex flex-col grow-[1] justify-start items-center border border-blue-900">
					<h1 className="font-semibold text-lg text-blue-900 m-4">
						Personal Details
					</h1>
					<h3>{details.name}</h3>
					<h4>Age: {details.age}</h4>
					<h4>Lives in: {details.location}</h4>
					<h4>Weight: {details.weight}</h4>
					<h4>Height: {details.height}</h4>
					<h4>BMI: {details.bmi}</h4>
					<h4>Blood group: {details.bloodGroup}</h4>
					<h4>Last health check: {details.lastHealthCheck}</h4>
					<h4 className="font-semibold text-red-800 hover:underline">
						Check Medical history
					</h4>
					<h4 className="font-semibold text-red-800 hover:underline">
						Insurance details
					</h4>
					<h4 className="font-semibold text-red-800 hover:underline">
						Emergency Contact details
					</h4>
				</div>
			</div>
			<div>
				<Link
					to="/fruitNutition"
					className="w-96 h-10 bg-blue-900 text-white p-2 rounded-lg"
				>
					Find nutrition of a fruit
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
