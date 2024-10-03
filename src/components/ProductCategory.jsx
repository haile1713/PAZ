import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge"

const Category = ({ data, setFilter }) => {
	const [selectedColor, setSelectedColor] = useState("any");
	const [colorSet, setColorSet] = useState(() => new Set([]))

	const pipe = (...fns) => (initialValue) => {
		return fns.reduce((acc, fn) => fn(acc), initialValue);
	};
	const filterColor = (color) => (data) =>
		data.filter((item) => item.color === color || color === "any");

	useEffect(() => {
		const combinedFilter = pipe(
			filterColor(selectedColor)
		);
		setFilter(combinedFilter);
	}, [selectedColor]);
	const pushItem = item => {
		setColor(prev => new Set(prev).add(item));
	}
	useEffect(() => {
		const newColorSet = new Set(data.map(item => item.color));
		setColorSet(newColorSet);
	}, [data]);



	return (
		<>
			<div className="color-category mt-5">
				<h1 className="mb-3">Color</h1>
				<RadioGroup defaultValue={selectedColor} onValueChange={x => setSelectedColor(x)}>
					{
						Array.from(colorSet).map(color => {
							const filterdItem = data.find(item => item.color == color)
							if (!filterdItem) return null
							return (
								<div key={filterdItem.id} className="flex items-center space-x-2">
									<RadioGroupItem id={filterdItem.title} value={filterdItem.color} style={{ color: filterdItem.hex }}>
										<span className="sr-only">{filterdItem.color}</span> {/* For accessibility */}
									</RadioGroupItem>
									<Badge className="w-fit" style={{ backgroundColor: filterdItem.hex, color: filterdItem.hexBack }}>{filterdItem.color}</Badge>
								</div>
							)

						})
					}
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="any" id="any-color">
							<span className="sr-only">Any Color</span>
						</RadioGroupItem>
						<Label htmlFor="any-color">Any</Label>
					</div>
				</RadioGroup>
			</div>
		</>
	);
};

export default Category;
