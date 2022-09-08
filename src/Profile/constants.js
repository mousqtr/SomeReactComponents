import { FaUserFriends, FaUserTie } from "react-icons/fa";
import { MdNotifications, MdSpaceDashboard, MdSettings } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { IoLanguage, IoClose } from "react-icons/io5";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { BsFillDoorOpenFill } from "react-icons/bs";

export const WIDTH_MIN = 900;

export const MENU = [
    { id: 'general', class: 'header', text: 'Général', icon: <></>},
    { id: 'dashboard', class: 'body', text: 'Dashboard', icon: <MdSpaceDashboard />},
    { id: 'friends',class: 'body', text: 'Friends', icon: <FaUserFriends />},
    { id: 'informations', class: 'header', text: 'Informations', icon: <></>},
    { id: 'settings', class: 'body', text: 'Paramètres', icon: <MdSettings />},
    { id: 'languages',class: 'body', text: 'Langues', icon: <IoLanguage />},
    { id: 'notifications',class: 'body', text: 'Notifications', icon: <MdNotifications />},
    { id: 'avatar', class: 'header', text: 'Avatar', icon: <></>},
    { id: 'custom', class: 'body', text: 'Personnalisation', icon: <FaUserTie />},
    { id: 'animation',class: 'body', text: 'Animation', icon: <RiUserStarFill />},
    { id: 'status', class: 'header', text: 'Statut', icon: <></>},
    { id: 'disconnect', class: 'body', text: 'Se déconnecter', icon: <BsFillDoorOpenFill />}
];