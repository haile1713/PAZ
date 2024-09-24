import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

const Category = ({ data, setFilter }) => {
	const [selectedColor, setSelectedColor] = useState("any");

	const pipe = (...fns) => (initialValue) => {
		return fns.reduce((acc, fn) => fn(acc), initialValue);
	};
	const filterColor = (color) => (data) =>
		data.filter((item) => item.color === color || color === "any");

	const clean = (str) => str.toLowerCase().trim();
	const doesInclude = (item1, item2) => {
		return clean(item1).includes(clean(item2))
	}

	const searchProduct = (searchTerm) => (data) => {
		if (!searchTerm) return data
		return data.filter((item) => (doesInclude(item.title, searchTerm) || doesInclude(item.description, searchTerm)));
	}

	// for search
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")

	useEffect(() => {
		const combinedFilter = pipe(
			filterColor(selectedColor),
			searchProduct(value)
		);
		setFilter(combinedFilter);
	}, [selectedColor, value]);


	return (
		<>
			<div className="color-category mt-5">
				<h1 className="mb-3">Color</h1>
				<RadioGroup defaultValue={selectedColor} onValueChange={x => setSelectedColor(x)}>
					{data.map((item) => (
						<div key={item.id} className="flex items-center space-x-2">
							<RadioGroupItem id={item.title} value={item.color} style={{ color: item.hex }}>
								<span className="sr-only">{item.color}</span> {/* For accessibility */}
							</RadioGroupItem>
							<Label htmlFor={item.title} style={{ color: item.hex }}>
								{item.color}
							</Label>
						</div>
					))}
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="any" id="any-color">
							<span className="sr-only">Any Color</span>
						</RadioGroupItem>
						<Label htmlFor="any-color">Any</Label>
					</div>
				</RadioGroup>
			</div>
			<div className="search-product mt-10">
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={open}
							className="w-[200px] justify-between hover:text-secondary"
						>
							{value
								? value
								: "Select product..."}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[200px] p-0">
						<Command>
							<CommandInput placeholder="Search product..." />
							<CommandList>
								<CommandEmpty>No product found.</CommandEmpty>
								<CommandGroup>
									{data.map((product) => (
										<CommandItem
											key={product.id}
											value={product.title}
											className="hover:text-secondary"
											onSelect={(currentValue) => {
												setValue(`${currentValue} `) // adding extra space makes it work why
												setOpen(false)
											}}
										>
											{product.title}
										</CommandItem>
									))}
								</CommandGroup>
								<CommandGroup>
									{data.map((product) => (
										<CommandItem
											key={product.id}
											value={product.description}
											className="hover:text-secondary"
											onSelect={(currentValue) => {
												setValue(`${currentValue} `) // adding extra space makes it work why
												setOpen(false)
											}}
										>
											{product.description.slice(0, 15)}
										</CommandItem>
									))}
								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent >
				</Popover>

			</div>

		</>
	);
};

export default Category;
