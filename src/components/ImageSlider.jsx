import React, { useEffect } from "react";
import { images } from "../data/imageData";

const ImageSlider = ({
	currentIndex,
	onIndexChange,
	isManual,
	setIsManual,
}) => {
	useEffect(() => {
		let interval;

		if (!isManual) {
			interval = setInterval(() => {
				onIndexChange((prevIndex) => (prevIndex + 1) % images.length);
			}, 4000); // Change every 4 seconds
		}

		return () => clearInterval(interval);
	}, [onIndexChange, isManual]);

	useEffect(() => {
		if (isManual) {
			const manualTimeout = setTimeout(() => {
				setIsManual(false);
			}, 8000);

			return () => clearTimeout(manualTimeout);
		}
	}, [isManual, setIsManual]);

	return (
		<div className="relative w-full h-screen overflow-hidden">
			<div
				className="flex transition-transform duration-[1500ms] ease-in-out"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<div
						key={index}
						className="w-full h-screen flex-shrink-0 relative"
					>
						<img
							src={image.src}
							alt={image.alt}
							className="object-cover w-full h-full"
						/>
						<div
							className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center"
							style={{
								transform: `translateY(${
									currentIndex === index ? "0" : "50px"
								})`,
								opacity: currentIndex === index ? 1 : 0,
								transition:
									"opacity 1.5s ease-in-out, transform 1.5s ease-in-out",
							}}
						>
							{image.topText && image.bottomText ? (
								<>
									<h2 className="text-golden-yellow text-5xl md:text-6xl font-bold">
										{image.topText}
									</h2>
									<h3 className="text-dark-green text-xl md:text-3xl font-semibold mt-4">
										{image.bottomText}
									</h3>
								</>
							) : (
								<h2 className="text-golden-yellow text-5xl md:text-6xl font-bold">
									{image.singleText}
								</h2>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
