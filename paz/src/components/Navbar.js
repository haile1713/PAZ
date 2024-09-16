import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	HomeIcon,
	ShoppingBagIcon,
	PhotoIcon,
	PhoneIcon,
	InformationCircleIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav
			className="p-4 border-b-0 absolute top-0 left-0 w-full z-50"
			style={{ backgroundColor: "transparent" }}
		>
			<div className="mx-auto flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center space-x-10">
					<img src="/assets/logo.png" alt="Logo" className="h-14 w-14" />
					<span className="text-golden-yellow text-5xl font-bold">
						{" "}
						PAZ Terrazzo{" "}
					</span>
				</div>

				{/* Hamburger Icon */}
				<div className="md:hidden flex items-center">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-golden-yellow"
					>
						{isOpen ? (
							<XMarkIcon className="h-8 w-8" />
						) : (
							<Bars3Icon className="h-8 w-8" />
						)}
					</button>
				</div>

				{/* Navigation Links */}
				<div
					className={`md:flex md:space-x-10 ${
						isOpen ? "block" : "hidden"
					} absolute md:relative top-full left-0 w-full md:w-auto bg-transparent md:bg-transparent md:shadow-none shadow-lg`}
				>
					<Link
						to="/"
						className="flex items-center text-golden-yellow  text-xl font-bold hover:text-white-ish hover:scale-90 transition-transform duration-300 p-2"
					>
						<HomeIcon className="h-8 w-8 mr-3" />
						Home
					</Link>
					<Link
						to="/products"
						className="flex items-center text-golden-yellow text-xl font-bold hover:text-white-ish hover:scale-90 transition-transform duration-300 p-2"
					>
						<ShoppingBagIcon className="h-8 w-8 mr-3" />
						Products
					</Link>
					<Link
						to="/gallery"
						className="flex items-center text-golden-yellow text-xl font-bold hover:text-white-ish hover:scale-90 transition-transform duration-300 p-2"
					>
						<PhotoIcon className="h-8 w-8 mr-3" />
						Gallery
					</Link>
					<Link
						to="/about"
						className="flex items-center text-golden-yellow text-xl font-bold hover:text-white-ish hover:scale-90 transition-transform duration-300 p-2"
					>
						<InformationCircleIcon className="h-8 w-8 mr-3" />
						About Us
					</Link>
					<Link
						to="/contact"
						className="flex items-center text-golden-yellow text-xl font-bold hover:text-white-ish hover:scale-90 transition-transform duration-300 p-2"
					>	
						<PhoneIcon className="h-8 w-8 mr-3" />
						Contact Us
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
