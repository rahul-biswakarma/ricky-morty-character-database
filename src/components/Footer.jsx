import React from "react";

const Footer = (props) => {
	const { characters, pageNo, setPageNo, maxNextButtonCount } = props;
	return (
		<div className="flex gap-[3rem] flex-wrap p-[5rem_3rem] justify-center items-center bg-[#202329]">
			<button
				className="bg-[#272b33] text-white font-bold py-2 px-4 rounded hover:bg-text_hover"
				onClick={() => {
					if (pageNo !== 1) setPageNo(pageNo - 1);
				}}
			>
				Prev
			</button>

			{/* First Button */}
			<div className="flex gap-[1rem] items-center flex-wrap">
				<button
					className={`bg-[#272b33] text-white font-bold py-2 px-4 rounded hover:bg-text_hover ${
						pageNo === 1 ? "bg-[#ff0000]" : ""
					}`}
					onClick={() => {
						setPageNo(1);
					}}
				>
					1
				</button>

				{/* ... */}
				{characters &&
					characters.info &&
					characters.info.pages &&
					pageNo - maxNextButtonCount > 0 && (
						<span className="text-[#5b6375]">...</span>
					)}

				{/* Middle button */}
				{characters &&
					characters.info &&
					characters.info.pages &&
					Array.from(Array(characters.info.pages).keys()).map((page) => {
						if (page + 1 === 1) return;
						if (page + 1 === characters.info.pages) return;

						if (
							(pageNo - maxNextButtonCount >= 0 &&
								pageNo === 1 &&
								page + 1 <= maxNextButtonCount) ||
							(page + 1 >= pageNo - maxNextButtonCount &&
								page + 1 <= pageNo + maxNextButtonCount)
						)
							return (
								<button
									key={page}
									className={`bg-[#272b33] text-white font-bold py-2 px-4 rounded hover:bg-text_hover ${
										pageNo === page + 1 ? "bg-[#ff0000]" : ""
									}`}
									onClick={() => {
										setPageNo(page + 1);
									}}
								>
									{page + 1}
								</button>
							);
					})}

				{/* ... */}
				{characters &&
					characters.info &&
					characters.info.pages &&
					pageNo + maxNextButtonCount < characters.info.pages && (
						<span className="text-[#5b6375]">...</span>
					)}

				{/* Last button */}
				<button
					className={`bg-[#272b33] text-white font-bold py-2 px-4 rounded hover:bg-text_hover ${
						pageNo === characters.info.pages ? "bg-[#ff0000]" : ""
					}`}
					onClick={() => {
						setPageNo(characters.info.pages);
					}}
				>
					{characters.info.pages}
				</button>
			</div>
			<button
				className="bg-[#272b33] text-white font-bold py-2 px-4 rounded hover:bg-text_hover"
				onClick={() => {
					if (pageNo !== characters.info.pages) setPageNo(pageNo + 1);
				}}
			>
				Next
			</button>
		</div>
	);
};

export default Footer;
