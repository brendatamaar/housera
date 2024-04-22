import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className='p-5'>
			<h1>Welcome to Remix - ShadCN UI</h1>
			<Button>This is a button</Button>
		</div>
	);
}
