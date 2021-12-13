import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { SiInstagram, SiSkype, SiTwitter } from "react-icons/si";

export default function NavigationHeading() {
  return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 space-y-4">
      <img
        className="w-auto h-32 border-8 border-gray-700 rounded-full"
        src="profile-img.jpg"
        alt="Profile image"
      />
      <h1 className="text-2xl font-semibold text-white">Alex Smith</h1>
      <div className="flex items-center justify-center space-x-2 text-sm">
        <a
          href=""
          className="p-2 font-semibold text-center text-white bg-gray-800 rounded-full"
        >
          <SiTwitter className="h-5 w-5" />
        </a>
        <a
          href=""
          className="p-2 font-semibold text-center text-white bg-gray-800 rounded-full"
        >
          <RiFacebookFill className="h-5 w-5" />
        </a>
        <a
          href=""
          className="p-2 font-semibold text-center text-white bg-gray-800 rounded-full"
        >
          <SiInstagram className="h-5 w-5" />
        </a>
        <a
          href=""
          className="p-2 font-semibold text-center text-white bg-gray-800 rounded-full"
        >
          <SiSkype className="h-5 w-5" />
        </a>
        <a
          href=""
          className="p-2 font-semibold text-center text-white bg-gray-800 rounded-full"
        >
          <RiLinkedinFill className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
