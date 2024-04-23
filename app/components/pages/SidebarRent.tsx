import { TbBuilding, TbHistory, TbUsers } from "react-icons/tb";
import { SidebarAccordion } from "./SidebarAccordion";

export const SidebarRent = () => {
  return (
    <SidebarAccordion label="My Rent" value="records">
      <div className="h-2" />
      <a
        href="#"
        className="flex items-center gap-2 px-2 text-sm font-medium"
      >
        <TbUsers className="opacity-70" /> Ongoing Activities
      </a>
      <div className="h-2" />
      <a
        href="#"
        className="flex items-center gap-2 px-2 text-sm font-medium"
      >
        <TbBuilding className="opacity-70" /> My Place
      </a>
      <div className="h-2" />
      <a
        href="#"
        className="flex items-center gap-2 px-2 text-sm font-medium"
      >
        <TbHistory className="opacity-70" /> History
      </a>
    </SidebarAccordion>
  );
};
