import { MdHomeFilled } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import { FaUserAlt, FaUserFriends } from "react-icons/fa";

export const SideMenu = [
  {
    title: "Home",
    href: "/",
    icon: <MdHomeFilled />,
  },
  {
    title: "TodoList",
    href: "/todo",
    icon: <RiTodoFill />,
  },
  {
    title: "User",
    href: "/user-profile",
    icon: <FaUserAlt />,
  },
  {
    title: "customers",
    href: "/customers",
    icon: <FaUserFriends />,
  },
];
