import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import { images } from "../data/imageData";
import Sidebar from "./Sidebar";
import BottomSection from "./BottomSection";

const homepageStyle = {
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
};

const Homepage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	return (
		<div style={homepageStyle} className="relative w-full h-screen">
			<ImageSlider
				currentIndex={currentIndex}
				onIndexChange={setCurrentIndex}
			/>

			<BottomSection
				currentIndex={currentIndex}
				onPrev={handlePrev}
				onNext={handleNext}
			/>

			<Sidebar />
		</div>
	);
};

export default Homepage;
