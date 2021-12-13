import clsx from "clsx";
import { Link } from "remix";
import { navigation } from "~/utils/constants";
import { SiTwitter, SiFacebook, SiSkype, SiInstagram } from "react-icons/si";

import { RiLinkedinFill, RiFacebookFill } from "react-icons/ri";
import NavigationItems from "./NavigationItems";
import NavigationHeading from "./NavigationHeading";

export default function SideNavigation() {
  return (
    <div className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 z-10">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-black">
        <NavigationHeading />
        <NavigationItems />
      </div>
    </div>
  );
}
