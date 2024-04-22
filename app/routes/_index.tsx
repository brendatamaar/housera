import { title } from "@/config.shared";
import type { MetaFunction } from "@remix-run/node";
import { Header } from "@/components/header";
import { SidebarContext } from "@/components/pages/SidebarContext";
import {
	TbBuilding,
	TbLayoutSidebarLeftCollapse,
	TbLayoutSidebarLeftExpand,
	TbMinusVertical,
} from "react-icons/tb";

import { useContext } from "react";

export const meta: MetaFunction = () => {
	return [
		{ title: title() },
		{ name: "description", content: "housera" },
	];
};

export default function Index() {
	const {
		setSidebarOpen,
		isSidebarOpen,
		isSidebarCollapsed,
		setSidebarCollapsed,
	} = useContext(SidebarContext);

	return (
		<div className="h-dvh w-screen md:w-auto md:h-full flex flex-col">
			<Header>
				<div className="flex items-center gap-2">
					{!isSidebarOpen ? (
						<div className="flex items-center gap-2 md:hidden">
							<button
								onClick={() => setSidebarOpen(true)}
								className="opacity-60 hover:opacity-100 transition flex items-center md:hidden"
							>
								<TbLayoutSidebarLeftExpand />
							</button>
							<TbMinusVertical className="opacity-30" />
						</div>
					) : null}
					{isSidebarCollapsed ? (
						<div className="items-center gap-2 hidden md:flex">
							<button
								onClick={() => setSidebarCollapsed(false)}
								className="opacity-60 hover:opacity-100 transition flex items-center"
							>
								<TbLayoutSidebarLeftExpand />
							</button>
							<TbMinusVertical className="opacity-30" />
						</div>
					) : null}
					<div className="flex items-center gap-1">
						<TbBuilding /> <span className="font-semibold">Companies</span>
					</div>
				</div>
			</Header>

		</div>
	);
}
