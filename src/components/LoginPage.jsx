const LoginPage = () => {
	return (
		<div className="flex flex-col justify-center items-center text-blue-900 border m-10 p-8">
			<h1 className="mb-6 font-semibold">Login with your phone number</h1>
			<label>Phone number</label>
			<input type="text" className="border border-blue-900 rounded-md" />
			<label>Enter OTP</label>
			<input type="text" className="border border-blue-900 rounded-md" />
			<button className="my-4 w-24 h-8 border bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-500">
				Login
			</button>
		</div>
	);
};

export default LoginPage;
