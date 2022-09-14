import { FaUserFriends, FaUserTie } from "react-icons/fa";
import { MdNotifications, MdSpaceDashboard, MdSettings } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { IoLanguage, IoClose } from "react-icons/io5";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { BsFillDoorOpenFill } from "react-icons/bs";

export const SECTIONS = {
    'Améliorer le fonctionnement' : [
        { id: 'dashboard', class: 'body', text: 'Dashboard', icon: <MdSpaceDashboard />},
        { id: 'friends',class: 'body', text: 'Friends', icon: <FaUserFriends />}
    ],
    'Alimenter le contenu' : [
        { id: 'feedActivities', class: 'body', text: 'Contribuer aux activitiés', icon: <MdSpaceDashboard />},
        { id: 'friends',class: 'body', text: 'Friends', icon: <FaUserFriends />}
    ],
    'Accélerer le développement' : [
        { id: 'dashboard', class: 'body', text: 'Dashboard', icon: <MdSpaceDashboard />},
        { id: 'friends',class: 'body', text: 'Friends', icon: <FaUserFriends />}
    ],
};