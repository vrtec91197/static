import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Input,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Breadcrumbs,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Squares2X2Icon,
  BellIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            src="/image/avatar1.jpg"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className="flex items-center gap-2 rounded"
            >
              {React.createElement(icon, {
                className: "h-4 w-4",
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal">
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export function NavbarWithSearch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <Navbar color="white" shadow={false} fullWidth>
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Breadcrumbs className="!bg-white">
            <Bars3Icon className="h-5 w-5 mr-2" strokeWidth={2} />
            <a href="#" className="opacity-60 font-bold">
              <span>Dashboard</span>
            </a>
            <a href="#" className="opacity-60 font-bold">
              <span>Projects</span>
            </a>
            <a href="#" className="font-bold">
              Breadcrumbs
            </a>
          </Breadcrumbs>
          <Typography color="blue-gray" className="font-bold pl-5">
            Development
          </Typography>
        </div>
        <div className="lg:flex hidden items-center gap-2">
          <div className="w-60 flex">
            <Input icon={<i className="fas fa-search" />} label="Search" />
          </div>
          <IconButton variant="text">
            <BellIcon className="h-5 w-5 text-gray-400" />
          </IconButton>
          <IconButton variant="text">
            <Squares2X2Icon className="h-5 w-5 text-gray-400" />
          </IconButton>
          <ProfileMenu />
          <Button variant="text">Log Out</Button>
        </div>
        <IconButton
          size="sm"
          variant="text"
          onClick={handleOpen}
          className="ml-auto inline-block text-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-2">
            <IconButton variant="text">
              <BellIcon className="h-5 w-5 text-gray-400" />
            </IconButton>
            <IconButton variant="text">
              <Squares2X2Icon className="h-5 w-5 text-gray-400" />
            </IconButton>
            <ProfileMenu />
            <Button variant="text">Log Out</Button>
          </div>
          <div className="w-60 flex">
            <Input icon={<i className="fas fa-search" />} label="Search" />
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithSearch;



 <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-2">
          <img src="/image/mt-logo.svg" alt="logo" />
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="mr-4 text-xs font-bold cursor-pointer"
          >
            Material <br /> Tailwind
          </Typography>
        </div>
