import { Dialog, Transition } from "@headlessui/react";
import { Fragment, FunctionComponent } from "react";
import { HiOutlineX } from "react-icons/hi";
import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { SiInstagram, SiSkype, SiTwitter } from "react-icons/si";
import NavigationHeading from "./NavigationHeading";
import NavigationItems from "./NavigationItems";

type Props = FunctionComponent<{
  isOpen: boolean;
  onClose: (value: boolean) => void;
}>;

const MobileNavigation: Props = ({ isOpen, onClose }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 lg:hidden"
        onClose={onClose}
      >
        {/* <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child> */}
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-black overflow-y-auto">
            {/* <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => onClose(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <HiOutlineX
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Transition.Child> */}
            {/* <div className="flex flex-col flex-grow pt-5 pb-4 overflow-hidden bg-black"></div> */}
            <NavigationHeading />
            <NavigationItems />
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
export default MobileNavigation;
