import HomeIcon from "@mui/icons-material/Home";
import BiotechIcon from "@mui/icons-material/Biotech";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ConstructionIcon from '@mui/icons-material/Construction';
import MemoryIcon from '@mui/icons-material/Memory';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FestivalIcon from '@mui/icons-material/Festival';
import Diversity2Icon from '@mui/icons-material/Diversity2';

export const menuItems = [
  {
    id: "home",
    path: "/",
    title: "Home",
    Icon: HomeIcon,
  },
  {
    id: "club",
    path: "/club",
    title: "Club",
    Icon: GroupsIcon,
  },
  {
    id: "laboratorio",
    path: "/laboratorio",
    title: "Laboratorio",
    Icon: BiotechIcon,
  },
  {
    id: "taller",
    path: "/taller",
    title: "Taller",
    Icon: ConstructionIcon,
  },
  {
    id: "comarca",
    path: "/comarcatech",
    title: "Comarca Tech",
    Icon: MemoryIcon,
  },
  {
    id: "liga",
    path: "/liga-robotica",
    title: "Liga Robótica",
    Icon: SmartToyIcon,
  },
  {
    id: "feria",
    path: "/feria-de-ciencias",
    title: "Feria de ciencias",
    Icon: FestivalIcon,
  },
  {
    id: "proyectos",
    path: "/proyectos-comunitarios",
    title: "Proyectos comunitarios",
    Icon: Diversity2Icon,
  },
  {
    id: "comunidad",
    path: "/comunidad",
    title: "Comunidad",
    Icon: Diversity3Icon,
  },
];
