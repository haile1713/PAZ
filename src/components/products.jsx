import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

const Product = ({ data }) => {
	return (
		data.map(item => (
			<Card className="mt-20" key={item.id}>
				<CardHeader>
					<CardTitle>{item.title}</CardTitle>
					<Badge className="w-fit" style={{ backgroundColor: item.hex }}>{item.color}</Badge>
				</CardHeader>
				<CardContent>
					<img src={item.img} className="h-60 w-60 xl:h-80 xl:w-80" alt={item.title} />
				</CardContent>
				<CardFooter>
					<CardDescription>{item.description}</CardDescription>
				</CardFooter>
			</Card>
		))
	);
};

export default Product;

