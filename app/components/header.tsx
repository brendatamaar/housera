import { PropsWithChildren } from "react";
import { TbDotsVertical, TbPlus } from "react-icons/tb";

import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useHydrated } from "remix-utils/use-hydrated";

import {
	getTheme,
	setTheme as setSystemTheme,
} from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = ({ children }: PropsWithChildren) => {
	const hydrated = useHydrated();
	const [, rerender] = React.useState({});
	const setTheme = React.useCallback((theme: string) => {
		setSystemTheme(theme);
		rerender({});
	}, []);
	const theme = getTheme();

	return (
		<div className="border-b-[1px] border-stone-200 p-2 px-4">
			<div className="flex items-center justify-between">
				<div className="flex gap-2 items-center">{children}</div>
				<div className="flex items-center gap-2">
					<div className="flex row-reverse">
						<div>
							{/* <img
                    alt="any"
                    src={`/people/${name}.png`}
                    width={24}
                    height={24}
                    className="rounded-full border border-white/80"
                  /> */}
						</div>
					</div>
					<button className="border border-stone-200 shadow-sm rounded-full w-[24px] h-[24px] flex justify-center items-center">
						<TbPlus className="text-sm" />
					</button>
					<button className="rounded-full w-[24px] h-[24px] flex justify-center items-center">
						<TbDotsVertical className="text-xs" />
					</button>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								className="w-[24px] h-[24px] rounded-full border"
								size="icon"
								variant="ghost"
							>
								<span className="sr-only">Theme selector</span>
								{!hydrated ? null : theme === "dark" ? (
									<MoonIcon />
								) : theme === "light" ? (
									<SunIcon />
								) : (
									<LaptopIcon />
								)}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="mt-2 mr-1">
							<DropdownMenuLabel>Theme</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem asChild>
								<button
									type="button"
									className="w-full"
									onClick={() => setTheme("light")}
									aria-selected={theme === "light"}
								>
									Light
								</button>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<button
									type="button"
									className="w-full"
									onClick={() => setTheme("dark")}
									aria-selected={theme === "dark"}
								>
									Dark
								</button>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<button
									type="button"
									className="w-full"
									onClick={() => setTheme("system")}
									aria-selected={theme === "system"}
								>
									System
								</button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
};
