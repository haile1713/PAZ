import React from "react";

const Sidebar = () => {
	return (
		<div className="fixed top-1/10 right-0 z-50">
			<ul className="space-y-8">
				{/*call */}
				<li className="group flex items-center justify-end p-2 bg-dark-green text-dark-green font-bold cursor-pointer rounded-l-full hover:bg-white-ish">
					<span className="hidden group-hover:block mr-2">
						+0123456789
					</span>
					<div className="w-10 h-10 bg-golden-yellow flex items-center justify-center rounded-full">
						<img
							src="/assets/phone-svgrepo-com.svg"
							alt="Online"
							className="w-6 h-6"
						/>
					</div>
				</li>
				{/* text */}
				<li className="group flex items-center justify-end p-2 bg-dark-green text-dark-green font-bold cursor-pointer rounded-l-full hover:bg-white-ish">
					<span className="hidden group-hover:block mr-2">
						@Pazceramics
					</span>
					<div className="w-10 h-10 bg-golden-yellow flex items-center justify-center rounded-full">
						<img
							src="/assets/message-square-dots-svgrepo-com.svg"
							alt="Call"
							className="w-6 h-6"
						/>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
