import {
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlineMail,
  HiOutlineServer,
  HiOutlineUser,
} from "react-icons/hi";

type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;
type MenuNavigation = Array<{ name: string; icon: HeroIcon; path: string }>;

export const navigation: MenuNavigation = [
  { name: "Home", path: "/", icon: HiOutlineHome },
  { name: "About", path: "/about", icon: HiOutlineUser },
  { name: "Resume", path: "/resume", icon: HiOutlineDocumentText },
  { name: "Portfolio", path: "/portfolio", icon: HiOutlineBriefcase },
  { name: "Services", path: "/services", icon: HiOutlineServer },
  { name: "Contact", path: "/contact", icon: HiOutlineMail },
];
