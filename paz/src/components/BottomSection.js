import React from "react";

const socialMediaLinks = [
	{ url: "https://www.facebook.com", icon: "icons8-facebook.svg" },
	{ url: "https://twitter.com", icon: "icons8-twitter.svg" },
	{ url: "https://www.instagram.com", icon: "icons8-instagram.svg" },
];

const BottomSection = ({ currentIndex, onPrev, onNext }) => {
	return (
		<div
			className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-between px-4 py-2 bg-white bg-opacity-20 shadow-lg w-full max-w-screen-lg sm:px-6 md:px-8 lg:px-12"
			style={{ maxWidth: "1200px" }}
		>
			{/* Navigation Arrows */}
			<button
				onClick={onPrev}
				className="text-dark-green text-2xl sm:text-3xl md:text-4xl px-4 py-2 font-bold hover:text-golden-yellow transition-colors"
			>
				&lt;
			</button>

			{/* Current Image Index */}
			<div className="flex items-center text-dark-green font-bold text-xl sm:text-2xl md:text-3xl">
				<span className="text-dark-green mx-2 font-bold text-lg sm:text-xl md:text-2xl">
					|
				</span>
			</div>

			{/* Navigation Next */}
			<button
				onClick={onNext}
				className="text-dark-green text-2xl sm:text-3xl md:text-4xl px-4 py-2 font-bold hover:text-golden-yellow transition-colors"
			>
				&gt;
			</button>

			{/* Social Media */}
			<div className="ml-auto flex space-x-4 sm:space-x-6 md:space-x-8 items-center">
				<span className="text-dark-green font-bold text-lg sm:text-xl md:text-2xl">
					Share
				</span>

				{socialMediaLinks.map((link) => (
					<a
						key={link.url}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={`/assets/${link.icon}`}
							alt={link.icon}
							className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 grayscale opacity-60 hover:opacity-100 transition-opacity"
						/>
					</a>
				))}
			</div>
		</div>
	);
};

export default BottomSection;
