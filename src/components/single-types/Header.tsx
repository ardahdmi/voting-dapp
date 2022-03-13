import { Link } from "react-router-dom";
import { HeaderItemProps } from "../../domain/interfaces";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  BurgerIcon,
  DashboardIcon,
  HomeIcon,
  LogoIcon,
} from "../../public/icons";

export const Header = () => {
  return (
    <header className="wrapper flex items-center justify-between pt-4 md:pt-6 lg:items-start">
      <Link to="/">
        <LogoIcon />
      </Link>
      <div className="lg:hidden">
        <MobileMenu />
      </div>
      <div className="hidden w-full items-start justify-end lg:flex">
        <ul className="flex gap-x-6">
          <HeaderItemDesktop to="/" text="Home" />
          <HeaderItemDesktop to="/dashboard" text="Dashboard" />
        </ul>
      </div>
    </header>
  );
};

const MobileMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="mobile-menu-button">
          <BurgerIcon />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="mobile-menu-items">
          <HeaderItemMobile to="/" text="Home" icon={<HomeIcon />} />
          <HeaderItemMobile
            to="/dashboard"
            text="Dashboard"
            icon={<DashboardIcon />}
          />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const HeaderItemMobile: React.FC<HeaderItemProps & { icon: JSX.Element }> = ({
  to,
  text,
  icon,
}) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link to={to}>
          <button
            className={`group flex w-full items-center gap-x-6 rounded-md px-2 py-2 text-xl`}
          >
            <div className="font-normal text-white/70">{icon}</div>
            <p className="text-white/70">{text}</p>
          </button>
        </Link>
      )}
    </Menu.Item>
  );
};

const HeaderItemDesktop: React.FC<HeaderItemProps> = ({ to, text }) => {
  return (
    <li>
      <Link to={to}>
        <p className="header-item">{text}</p>
      </Link>
    </li>
  );
};
