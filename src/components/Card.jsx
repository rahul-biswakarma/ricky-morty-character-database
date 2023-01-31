import React from "react";

const Card = (props) => {
	const { character } = props;
	return (
		<div className="flex flex-[1_1_max(380px,100%/3)] max-[580px]:flex-col bg-[#3c3e44] text-text_1 rounded-lg shadow">
			<img
				className="w-auto h-[220px] object-cover rounded-tl-lg rounded-bl-lg"
				src={character.image}
				alt={character.name}
			/>
			<div className="flex flex-col p-[1rem]">
				<h1 className="hover:text-text_hover text-2xl font-bold">
					{character.name}
				</h1>
				<div className="flex gap-[0.5rem] items-center">
					{character.status === "Alive" ? (
						<div className="w-[10px] h-[10px] bg-green-400 rounded-full"></div>
					) : (
						<div className="w-[10px] h-[10px] bg-rose-400 rounded-full"></div>
					)}{" "}
					{character.status} - {character.species}
				</div>
				<div className="mt-[1rem]">
					<h3 className="text-text_2">Origin</h3>
					<p className="hover:text-text_hover">{character.origin.name}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
