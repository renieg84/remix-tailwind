import { Link } from "remix";
import { navigation } from "~/utils/constants";

export default function NavigationItems() {
  return (
    <nav className="px-4 mt-8" aria-label="Sidebar">
      <ul className="flex flex-col space-y-4">
        {navigation.map((item) => (
          <Link to={item.path} key={item.name}>
            <li
              aria-current={false ? "page" : undefined}
              className="flex items-center px-4 py-2 font-medium text-gray-400 rounded-md group"
            >
              <item.icon
                className="flex-shrink-0 w-6 h-6 mr-3 text-current group-hover:text-blue-400"
                aria-hidden="true"
              />
              <span className="font-light text-md group-hover:text-white">
                {item.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
