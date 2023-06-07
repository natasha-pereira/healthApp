import { useState, useEffect } from "react";

const FruitNutrition = () => {
	const [fruit, setFruit] = useState("");
	const [fruitData, setFruitData] = useState({});
	const [find, setFind] = useState(false);

	const getFruitData = async () => {
		const data = await fetch("https://www.fruityvice.com/api/fruit/" + fruit);
		const result = await data.json();
		console.log(result);
		setFruitData(result);
	};

	useEffect(() => {
		getFruitData();
	}, [fruit]);

	return (
		<div className="flex flex-col justify-center items-center text-blue-900 border m-10 p-8">
			<h1 className="m-4">Enter a fruit name:</h1>
			<input
				className="border border-blue-900 rounded-md p-2"
				type="text"
				value={fruit}
				onChange={(e) => setFruit(e.target.value)}
			/>
			<button
				className="w-20 h-10 m-4 bg-blue-900 text-white rounded-md"
				onClick={() => setFind(true)}
			>
				Find 🔍
			</button>
			{find &&
				(fruitData.error ? (
					<h4 className="font-semibold text-center m-2">{fruitData?.error}</h4>
				) : (
					<div className="flex flex-col m-4">
						<h3 className="font-semibold text-center m-2">{fruitData.name}</h3>
						<h4 className="font-normal text-center m-1">Nutrition details</h4>
						<div className="flex gap-8 border p-3">
							<div className="flex flex-col">
								<span>Total Calories</span>
								<span>Carbohydrates</span>
								<span>Fat</span>
								<span>Protein</span>
								<span>Sugar</span>
							</div>
							<div className="flex flex-col">
								<span>{fruitData?.nutritions?.calories}</span>
								<span>{fruitData?.nutritions?.carbohydrates}</span>
								<span>{fruitData?.nutritions?.fat}</span>
								<span>{fruitData?.nutritions?.protein}</span>
								<span>{fruitData?.nutritions?.sugar}</span>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default FruitNutrition;
