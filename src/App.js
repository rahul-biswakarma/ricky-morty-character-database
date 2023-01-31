import React, { useState, useEffect } from "react";

import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useQuery } from "react-query";

const App = () => {
	const [pageNo, setPageNo] = useState(1);

	async function fetchCharacters({ queryKey }) {
		return await fetch(
			`https://rickandmortyapi.com/api/character/?page=${queryKey[1]}`
		).then((response) => response.json());
	}

	const [maxNextButtonCount, setMaxNextButtonCount] = useState(3);

	const { data, status } = useQuery(["characters", pageNo], fetchCharacters);

	return (
		<div>
			<Header />
			<div className="flex gap-[1rem] flex-wrap bg-[#272b33] p-[3rem_10vw]">
				{status === "loading" ? (
					<>
						<div className="flex justify-center w-full text-text_1 text-3xl font-bold text-center min-h-[60vh]">
							Loading
						</div>
					</>
				) : status === "error" ? (
					<div className="flex justify-center w-full text-text_1 text-3xl font-bold text-center min-h-[60vh]">
						Error
					</div>
				) : (
					data.results.map((character) => {
						return (
							<Card
								key={character.id}
								character={character}
							/>
						);
					})
				)}
			</div>
			{status !== "loading" && status !== "error" && (
				<Footer
					characters={data}
					pageNo={pageNo}
					setPageNo={setPageNo}
					maxNextButtonCount={maxNextButtonCount}
				/>
			)}
		</div>
	);
};

export default App;
