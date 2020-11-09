import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideNavData = [
  {
    title: "Memes",
    path: "/memes",
    icon: <AiIcons.AiFillClockCircle />,
    cName: "nav-text",
  },
  {
    title: "Games",
    path: "/games",
    icon: <AiIcons.AiFillRocket />,
    cName: "nav-text",
  },
  {
    title: "Black Clover",
    path: "/black-clover",
    icon: <FaIcons.FaChessKnight />,
    cName: "nav-text",
  },
  {
    title: "Ghosts",
    path: "/ghosts",
    icon: <FaIcons.FaGhost />,
    cName: "nav-text",
  },
];
