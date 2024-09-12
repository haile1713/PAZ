import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
	HomeIcon,
	ShoppingBagIcon,
	PhotoIcon,
	PhoneIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Component() {
	const location = useLocation();

	const isActive = (path) => location.pathname === path;

	return (
		<header className="flex h-10 items-center justify-between bg-background px-4 sm:px-6 z-50  absolute top-0 left-0 w-full  ">
			<Link to="/" className="flex items-center gap-2" >
				<img src="/assets/logo.png" alt="Logo" className="h-10" />
				<span className="text-lg font-semibold">PAZ TERRAZZO</span>
			</Link>
			<nav className="hidden gap-4 sm:flex">
				<Link to="/" className={`flex text-sm font-bold ${isActive("/") ? "text-primary" : "text-muted-foreground"} hover:scale-110 hover:text-foreground font-black `}>
					<HomeIcon className="h-5 mr-3" />
					Home
				</Link>
				<Link to="/products" className={`flex text-sm font-bold ${isActive("/products") ? "text-primary" : "text-muted-foreground"} hover:scale-110 hover:text-foreground font-black`}>
					<ShoppingBagIcon className="h-5 mr-3" />
					Products
				</Link>
				<Link to="/gallery" className={`flex text-sm font-bold ${isActive("/gallery") ? "text-primary" : "text-muted-foreground"} hover:scale-110 hover:text-foreground font-black`}>
					<PhotoIcon className="h-5 mr-3" />
					Gallery
				</Link>
				<Link to="/contact" className={`flex text-sm font-bold ${isActive("/contact") ? "text-primary" : "text-muted-foreground"} hover:scale-110 hover:text-foreground font-black`}>
					<PhoneIcon className="h-5 mr-3" />
					Contact
				</Link>
				<Link to="/about" className={`flex text-sm font-bold ${isActive("/about") ? "text-primary" : "text-muted-foreground"} hover:scale-110 hover:text-foreground font-black`}>
					<InformationCircleIcon className="h-5 mr-3" />
					About
				</Link>

			</nav>
			{/* when it shrink */}
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="sm:hidden">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<SheetHeader>
						<SheetTitle className="flex gap-5 h-4 pb-10">
							<img src="/assets/logo.png" alt="Logo" className="h-10" />
							PAZ TERRAZZO
						</SheetTitle>
						<SheetDescription>
						</SheetDescription>
					</SheetHeader>
					<div className="grid gap-4 p-4">
						<nav className="grid gap-2">
							<Link
								to="/"
								className="flex items-center gap-2 rounded-md px-3 py-2 bg-primary text-sm font-medium hover:bg-muted text-accent"
							>
								<HomeIcon className="h-5 mr-3" />
								Home
							</Link>
							<Link
								to="/products"
								className="flex items-center gap-2 rounded-md px-3 py-2 bg-primary text-sm font-medium hover:bg-muted text-accent"
							>
								<ShoppingBagIcon className="h-5 mr-3" />
								Products
							</Link>
							<Link
								to="/gallery"
								className="flex items-center gap-2 rounded-md px-3 py-2 bg-primary text-sm font-medium hover:bg-muted text-accent"
							>
								<PhotoIcon className="h-5 mr-3" />
								Gallery
							</Link>
							<Link
								to="/contact"
								className="flex items-center gap-2 rounded-md px-3 py-2 bg-primary text-sm font-medium hover:bg-muted text-accent"
							>
								<PhoneIcon className="h-5 mr-3" />
								Contact
							</Link>
							<Link
								to="/about"
								className="flex items-center gap-2 rounded-md px-3 py-2 bg-primary text-sm font-medium hover:bg-muted text-accent"
							>
								<InformationCircleIcon className="h-5 mr-3" />
								About
							</Link>
						</nav>
					</div>
				</SheetContent>
			</Sheet>
		</header>
	)
}

function MenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	)
}

