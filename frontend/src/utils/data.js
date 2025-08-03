import {
  History,
  ChartNoAxesCombined,
  CircleUserRound,
  ChartPie,
  LogOut
} from "lucide-react";

export const SIDE_MENU_DATA = [
    {
        id:"01",
        label:"Dashboard",
        icon: ChartPie,
        path: "/"
    },
    {
        id:"02",
        label:"Predict",
        icon: ChartNoAxesCombined,
        path: "/"
    },
    {
        id:"03",
        label:"History",
        icon: History,
        path: "/"
    },
    {
        id:"03",
        label:"Profile",
        icon: CircleUserRound,
        path: "/profile"
    },
    {
        id:"06",
        label:"Logout",
        icon: LogOut,
        path: "logout"
    }
]