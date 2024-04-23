import { TbArchive, TbFileCheck, TbFilePencil, TbHome, TbPencil, TbPlus, TbReload, TbUsers } from "react-icons/tb";
import { SidebarAccordion } from "./SidebarAccordion";

export const SidebarLists = () => {
  return (
    <SidebarAccordion label="My Listings" value="lists">
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
        <TbFileCheck className="opacity-70" /> Listed
      </a>
      <div className="h-2" />
      <a
        href="#"
        className="flex items-center gap-2 px-2 text-sm font-medium"
      >
        <TbFilePencil className="opacity-70" /> Drafted
      </a>
      <div className="h-2" />
      <a
        href="#"
        className="flex items-center gap-2 px-2 text-sm font-medium"
      >
        <TbReload className="opacity-70" /> Pending
      </a>
      <div className="h-2" />
      <a
        href="#"
        className="flex items-center gap-2 px-2 text-sm font-medium"
      >
        <TbArchive className="opacity-70" /> Archive
      </a>
      <div className="h-2" />
    </SidebarAccordion>
  );
};
