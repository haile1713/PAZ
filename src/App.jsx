import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Products from "./components/ProductsPage";
// import Gallery from './components/Gallery';
// import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/products" element={<Products />} />
					<Route path="/about" element={<AboutUs />} />
					{/*
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
