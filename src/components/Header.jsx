import React from "react";

const Header = () => {
	return (
		<div id="header-c">
			<header className="relative flex flex-col gap-[1rem] justify-center items-center min-h-[300px] sm:min-h-[400px] p-[3rem] backdrop-blur-lg bg-black/20">
				<h1 className="text-text_1 text-4xl sm:text-6xl md:text-8xl font-bold text-center">
					The Rick and Morty
				</h1>
				<span className="text-2xl text-text_1 font-[500]">
					Charater Database
				</span>
			</header>
		</div>
	);
};

export default Header;
