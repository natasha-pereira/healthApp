import React from "react";

const Medicines = () => {
	return (
		<div className="flex flex-col justify-between gap-4 text-blue-900 m-8">
			<h1 className="font-semibold underline">
				List of medicines currently taking
			</h1>
			<ul className="flex flex-col justify-between gap-4 font-normal">
				<li>
					<h4 className="font-semibold">Cosart</h4>
					<p>Ailment: High Blood Pressure</p>
					<p>Dosage: 1 tab, at night, after food</p>
				</li>
				<li>
					<h4 className="font-semibold">Humulin R U-100</h4>
					<p>Ailment: Type 1 Diabetes</p>
					<p>Dosage: short-acting insulin, inject when required</p>
				</li>
				<li>
					<h4 className="font-semibold">Zyrtec</h4>
					<p>Ailment: For Allergy</p>
					<p>Dosage: antihistamine, take when required</p>
				</li>
			</ul>
		</div>
	);
};

export default Medicines;
