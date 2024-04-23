"use client";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Accordion from "@radix-ui/react-accordion";

import {
  TbBell,
  TbChartBar,
  TbCheckbox,
  TbMail,
  TbNotes,
  TbLayoutDashboard,
  TbHeartStar,
  TbEye,
  TbBuildingCommunity,
  TbReportMoney,
  TbBuilding,
  TbShoppingCart,
  TbCurrencyDollar
} from "react-icons/tb";

import { SidebarHeader } from "./SidebarHeader";
import { SidebarSearch } from "./SidebarSearch";
import { SidebarRent } from "./SidebarRent";
import { SidebarLists } from "./SidebarLists";
import { Sheet } from "./Sheet";
import { useContext, useState } from "react";
import { SidebarContext } from "./SidebarContext";

const SidebarQuickActions = () => {
  return (
    <div className="flex flex-col gap-3">
      <a href="#" className="flex items-center gap-2 px-2 text-sm font-medium">
        <TbLayoutDashboard className="opacity-70" /> Dashboard
      </a>
      <a href="#" className="flex items-center gap-2 px-2 text-sm font-medium">
        <TbBuilding className="opacity-70" /> List My Property
      </a>
      <a href="#" className="flex items-center gap-2 px-2 text-sm font-medium">
        <TbHeartStar className="opacity-70" /> Favorite
      </a>
      <a href="#" className="flex items-center gap-2 px-2 text-sm font-medium">
        <TbEye className="opacity-70" /> Recently Viewed
      </a>
      <a href="#" className="flex items-center gap-2 px-2 text-sm font-medium">
        <TbBell className="opacity-70" /> Notifications
      </a>
      <a href="#" className="flex items-center gap-2 px-2 text-sm font-medium">
        <TbShoppingCart className="opacity-70" /> Community Marketplace
      </a>
      <a href="#" className="flex items-center gap-2 px-2 text-sm font-medium">
        <TbCurrencyDollar className="opacity-70" /> Payment Methods
      </a>
    </div>
  );
};

export const Sidebar = () => {
  const {
    setSidebarOpen,
    isSidebarOpen,
    isSidebarCollapsed,
    setSidebarCollapsed,
  } = useContext(SidebarContext);

  return (
    <Sheet open={isSidebarOpen} onOpenChange={(s) => setSidebarOpen(s)}>
      <ScrollArea.Root
        className={[
          "bg-stone-50 h-dvh overflow-hidden",
          isSidebarCollapsed ? "w-0" : "w-full",
        ].join(" ")}
      >
        <ScrollArea.Viewport className="h-full w-full border-r-[1px] border-stone-200">
          <div className="p-2 sticky top-0 border-b-[1px] bg-stone-50 border-stone-200 z-10">
            <SidebarHeader
              collapseSidebar={() => setSidebarCollapsed((s) => !s)}
              toggleSidebar={() => setSidebarOpen((s) => !s)}
            />
          </div>
          <div className="h-1" />
          <div className="p-2">
            <SidebarSearch />
          </div>
          <div className="h-2" />
          <div className="p-2">
            <SidebarQuickActions />
          </div>
          <div className="h-4" />
          <Accordion.Root type="multiple" defaultValue={["lists", "records"]}>
            <div className="p-2">
              <SidebarRent />
            </div>
            <div className="h-4" />
            <div className="p-2">
              <SidebarLists />
            </div>
          </Accordion.Root>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" />
      </ScrollArea.Root>
    </Sheet>
  );
};
