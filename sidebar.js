import React from "react";
import {
  Card,
  Chip,
  List,
  Menu,
  MenuList,
  MenuItem,
  CardBody,
  ListItem,
  Progress,
  Accordion,
  CardHeader,
  IconButton,
  Typography,
  MenuHandler,
  AccordionBody,
  ListItemSuffix,
} from "@material-tailwind/react";
import {
  BellIcon,
  TicketIcon,
  DocumentIcon,
  UserGroupIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import {
  PlusIcon,
  PaperClipIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

function SidebarLight() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const LIST_ITEM_STYLES =
    "px-4 !text-gray-600 hover:text-white hover:!bg-gray-900 active:bg-gray-900 active:text-white select-none focus:!bg-gray-900 focus:text-white hover:bg-opacity-100 focus:bg-opacity-100 active:bg-opacity-100";

  return (
    <Card className="h-[calc(100vh-2rem)] overflow-hidden overflow-y-scroll w-full max-w-[23rem] mx-auto p-6 shadow-md">
      <div className="grid grid-cols-12 h-full items-start">
        <div className="col-span-2 mt-3">
          <img
            src="https://www.material-tailwind.com/logos/mt-logo.png"
            alt="brand"
            className="h-9 w-9"
          />
          <hr className="mt-[30px] mb-6 border-gray-300 w-9" />
          <div className="space-y-3">
            <IconButton variant="text" size="sm">
              <Squares2X2Icon className="h-5 w-5 text-gray-900" />
            </IconButton>
            <IconButton variant="text" size="sm">
              <TicketIcon className="h-5 w-5 text-gray-600" />
            </IconButton>
            <IconButton variant="text" size="sm">
              <BellIcon className="h-5 w-5 text-gray-600" />
            </IconButton>
            <IconButton variant="text" size="sm">
              <UserGroupIcon className="h-5 w-5 text-gray-600" />
            </IconButton>
            <IconButton variant="text" size="sm">
              <PaperClipIcon className="h-5 w-5 text-gray-600" />
            </IconButton>
            <IconButton variant="text" size="sm">
              <DocumentIcon className="h-5 w-5 text-gray-600" />
            </IconButton>
            <IconButton variant="text" size="sm">
              <PlusIcon
                strokeWidth={2.5}
                className="h-5 w-5 text-gray-600"
              />
            </IconButton>
          </div>
        </div>
        <div className="col-span-10 grid h-full border-l border-gray-300 pl-4">
          <div>
            <div className="mb-2 flex items-center gap-3 my-4">
              <Squares2X2Icon className="h-5 w-5 text-gray-900" />
              <Typography color="blue-gray" className="text-lg font-bold">
                General
              </Typography>
            </div>
            <hr className="mt-8 mb-6 border-gray-300 w-60 mx-auto" />
            <List>
              <Typography
                variant="small"
                className="mb-2 font-bold text-gray-600 uppercase"
              >
                main
              </Typography>
              <div className="-mx-4 w-[calc(100%+32px)]">
                <ListItem className={LIST_ITEM_STYLES}>Dashboard</ListItem>
                <ListItem className={LIST_ITEM_STYLES}>Transactions</ListItem>
                <ListItem className={LIST_ITEM_STYLES}>
                  Notifications
                  <ListItemSuffix>
                    <Chip value="14" size="sm" variant="ghost" color="red" />
                  </ListItemSuffix>
                </ListItem>
              </div>
              <Typography
                variant="small"
                className="mb-2 mt-4 font-bold text-gray-600 uppercase"
              >
                Ecommerce
              </Typography>
              <div className="-mx-4">
                <ListItem className={LIST_ITEM_STYLES}>Customers</ListItem>
                <Accordion open={open === 1}>
                  <ListItem
                    selected={open === 1}
                    data-selected={open === 1}
                    onClick={() => handleOpen(1)}
                    className={`${LIST_ITEM_STYLES} py-[9px] data-[selected=true]:bg-gray-900 data-[selected=true]:text-white`}
                  >
                    <Typography className="font-normal mr-auto">
                      Subscribers
                    </Typography>
                    <ChevronDownIcon
                      strokeWidth={3}
                      className={`ml-auto text-gray-500 h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                    />
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0">
                      <ListItem className={`${LIST_ITEM_STYLES}`}>
                        Active
                      </ListItem>
                      <ListItem className={`${LIST_ITEM_STYLES}`}>
                        Inactive
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
                <Typography
                  variant="small"
                  className="mx-4 mb-2 mt-4 flex items-center justify-between font-bold text-gray-600 uppercase"
                >
                  folders
                  <PlusIcon
                    strokeWidth={2.5}
                    className="h-4 w-4 text-gray-600"
                  />
                </Typography>
                <ListItem className={LIST_ITEM_STYLES}>Marketing</ListItem>
                <ListItem className={LIST_ITEM_STYLES}>Providers</ListItem>
                <ListItem className={LIST_ITEM_STYLES}>My Notes</ListItem>
              </div>
            </List>
          </div>
          <Card className="mt-auto">
            <CardHeader
              shadow={false}
              className="flex items-start justify-between rounded-none"
            >
              <div>
                <img
                  src="https://www.material-tailwind.com/logos/Google - Official.png"
                  alt="google"
                  className="h-6 w-6"
                />
                <Typography
                  color="blue-gray"
                  variant="small"
                  className="font-bold mt-4"
                >
                  Google Drive
                </Typography>
              </div>
              <Menu>
                <MenuHandler>
                  <IconButton variant="text" size="sm">
                    <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
                  </IconButton>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Update</MenuItem>
                  <MenuItem>Delete</MenuItem>
                </MenuList>
              </Menu>
            </CardHeader>
            <CardBody className="p-4">
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <Typography
                    color="blue-gray"
                    variant="small"
                    className="font-medium"
                  >
                    15 GB <span className="text-gray-600">/ 16 GB</span>
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-gray-600 font-medium"
                  >
                    124 Files
                  </Typography>
                </div>
                <Progress size="sm" color="red" value={90} />
              </div>
              <Typography
                color="red"
                variant="small"
                className="font-bold mt-4"
              >
                Upgrade
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </Card>
  );
}

function SidebarDark() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const LIST_ITEM_STYLES =
    "px-4 !text-gray-500 hover:text-white hover:!bg-gray-50/20 active:bg-gray-50/20 active:text-white select-none focus:!bg-gray-50/20 focus:text-white";

  return (
    <Card
      color="gray"
      className="h-[calc(100vh-2rem)] overflow-hidden overflow-y-scroll w-full max-w-[23rem] mx-auto p-6 shadow-md"
    >
      <div className="grid grid-cols-12 h-full items-start">
        <div className="col-span-2 mt-3">
          <img
            src="https://www.material-tailwind.com/logos/mt-logo.png"
            alt="brand"
            className="h-9 w-9"
          />
          <hr className="mt-[30px] mb-6 border-gray-800 w-9" />
          <div className="space-y-3">
            <IconButton variant="text" size="sm">
              <Squares2X2Icon className="h-5 w-5 text-white" />
            </IconButton>
            <IconButton variant="text" color="white" size="sm">
              <TicketIcon className="h-5 w-5 text-gray-600" />
            </IconButton>
            <IconButton variant="text" color="white" size="sm">
              <BellIcon className="h-5 w-5 text-gray-600" />
            </IconButton>
            <IconButton variant="text" color="white" size="sm">
              <UserGroupIcon className="h-5 w-5 text-gray-600" />
            </IconButton>
            <IconButton variant="text" color="white" size="sm">
              <PaperClipIcon className="h-5 w-5 text-gray-600" />
            </IconButton>
            <IconButton variant="text" color="white" size="sm">
              <DocumentIcon className="h-5 w-5 text-gray-600" />
            </IconButton>
            <IconButton variant="text" color="white" size="sm">
              <PlusIcon
                strokeWidth={2.5}
                className="h-5 w-5 text-gray-600"
              />
            </IconButton>
          </div>
        </div>
        <div className="col-span-10 grid h-full border-l border-l-gray-800 pl-4">
          <div>
            <div className="mb-2 flex items-center gap-3 my-4">
              <Squares2X2Icon className="h-5 w-5 text-white" />
              <Typography color="white" className="text-lg font-bold">
                General
              </Typography>
            </div>
            <hr className="mt-8 mb-6 border-gray-800 w-60 mx-auto" />
            <List>
              <Typography
                variant="small"
                className="mb-2 font-bold text-gray-600 uppercase"
              >
                main
              </Typography>
              <div className="-mx-4 w-[calc(100%+32px)]">
                <ListItem className={LIST_ITEM_STYLES}>Dashboard</ListItem>
                <ListItem className={LIST_ITEM_STYLES}>Transactions</ListItem>
                <ListItem className={LIST_ITEM_STYLES}>
                  Notifications
                  <ListItemSuffix>
                    <Chip value="14" size="sm" variant="ghost" color="red" />
                  </ListItemSuffix>
                </ListItem>
              </div>
              <Typography
                variant="small"
                className="mb-2 mt-4 font-bold text-gray-600 uppercase"
              >
                Ecommerce
              </Typography>
              <div className="-mx-4">
                <ListItem className={LIST_ITEM_STYLES}>Customers</ListItem>
                <Accordion open={open === 1}>
                  <ListItem
                    selected={open === 1}
                    data-selected={open === 1}
                    onClick={() => handleOpen(1)}
                    className={`${LIST_ITEM_STYLES} py-[9px] data-[selected=true]:bg-gray-50/20 data-[selected=true]:text-white`}
                  >
                    <Typography className="font-normal mr-auto">
                      Subscribers
                    </Typography>
                    <ChevronDownIcon
                      strokeWidth={3}
                      className={`ml-auto text-gray-500 h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                    />
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0">
                      <ListItem className={`${LIST_ITEM_STYLES}`}>
                        Active
                      </ListItem>
                      <ListItem className={`${LIST_ITEM_STYLES}`}>
                        Inactive
                      </ListItem>
                    </List>
                  </AccordionBody>
                </Accordion>
                <Typography
                  variant="small"
                  className="mx-4 mb-2 mt-4 flex items-center justify-between font-bold text-gray-600 uppercase"
                >
                  folders
                  <PlusIcon
                    strokeWidth={2.5}
                    className="h-4 w-4 text-gray-600"
                  />
                </Typography>
                <ListItem className={LIST_ITEM_STYLES}>Marketing</ListItem>
                <ListItem className={LIST_ITEM_STYLES}>Providers</ListItem>
                <ListItem className={LIST_ITEM_STYLES}>My Notes</ListItem>
              </div>
            </List>
          </div>
          <Card className="!mt-auto bg-gray-800">
            <CardHeader
              shadow={false}
              className="flex items-start bg-gray-800 justify-between rounded-none"
            >
              <div>
                <img
                  src="https://www.material-tailwind.com/logos/Google - Official.png"
                  alt="google"
                  className="h-6 w-6"
                />
                <Typography
                  color="white"
                  variant="small"
                  className="font-bold mt-4"
                >
                  Google Drive
                </Typography>
              </div>
              <Menu>
                <MenuHandler>
                  <IconButton variant="text" size="sm" color="white">
                    <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
                  </IconButton>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Update</MenuItem>
                  <MenuItem>Delete</MenuItem>
                </MenuList>
              </Menu>
            </CardHeader>
            <CardBody className="p-4">
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <Typography
                    color="white"
                    variant="small"
                    className="font-medium"
                  >
                    15 GB <span className="text-gray-600">/ 16 GB</span>
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-gray-600 font-medium"
                  >
                    124 Files
                  </Typography>
                </div>
                <Progress size="sm" color="red" value={90} />
              </div>
              <Typography
                color="white"
                variant="small"
                className="font-bold mt-4"
              >
                Upgrade
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </Card>
  );
}

export function Sidebar5() {
  return (
    <section className="grid place-items-center">
      <div className="grid gap-10 md:grid-cols-2 grid-cols-1">
        <SidebarLight />
        <SidebarDark />
      </div>
    </section>
  );
}

export default Sidebar5;
