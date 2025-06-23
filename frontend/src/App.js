import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://127.0.0.1:8000/api/products")
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Product List</h1>
			<ul className="space-y-3">
				{products.map((product) => (
					<li key={product.id} className="bg-gray-100 p-4 rounded shadow">
						{product.name} - ₹{product.price}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
