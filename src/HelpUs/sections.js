import { FaUserFriends, FaExclamationCircle } from "react-icons/fa";
import { MdNotifications, MdSpaceDashboard, MdSettings } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { IoGameController, IoClose } from "react-icons/io5";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { BsPaypal } from "react-icons/bs";
import { GiTalk } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";

export const SECTIONS = {
    'Améliorer le fonctionnement' : [
        { 
            id: 'bugs', 
            class: 'body', 
            text: 'Remonter des anomalies', 
            icon: <FaExclamationCircle />
        },
        { 
            id: 'feedback',
            class: 'body', 
            text: 'Donner votre avis', 
            icon: <GiTalk />
        }
    ],
    'Alimenter le contenu' : [
        { 
            id: 'feedActivities', 
            class: 'body', 
            text: 'Contribuer aux activitiés', 
            icon: <IoGameController />},
    ],
    'Accélerer le développement' : [
        { 
            id: 'donation', 
            class: 'body', 
            text: 'Faire un don', 
            icon: <BsPaypal />
        },
        { 
            id: 'participate',
            class: 'body', 
            text: 'Participer', 
            icon: <HiUserGroup />
        }
    ],
};