import React, { useState } from "react";
import "./ProfileNav.scss";
import { FaUserFriends, FaUserTie } from "react-icons/fa";
import { MdNotifications, MdSpaceDashboard, MdSettings } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { IoLanguage, IoClose } from "react-icons/io5";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillDoorOpenFill } from "react-icons/bs";



export default function ProfileNav() {
    
    const [open, setOpen] = useState(true);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
        
    return (
        <div id="profileNav" style={{width: open ? '300px' : '60px'}}>
            <ul>
                <li className="title">
                    { open ? <BiArrowToLeft onClick={handleClose}/> : <BiArrowToRight onClick={handleOpen}/>}
                </li>
                <li className="header">{open ? 'Général' : ''}</li>
                <li className="body"><MdSpaceDashboard />{open ? 'Dashboard' : ''}</li>
                <li className="body"><FaUserFriends />{open ? 'Amis' : ''}</li>
                <li className="header">{open ? 'Paramètres' : ''}</li>
                <li className="body"><MdSettings />{open ? 'Informations' : ''}</li>
                <li className="body"><IoLanguage />{open ? 'Langue' : ''}</li>
                <li className="body"><MdNotifications />{open ? 'Notifications' : ''}</li>
                <li className="header">{open ? 'Avatar' : ''}</li>
                <li className="body"><FaUserTie />{open ? 'Personnalisation' : ''}</li>
                <li className="body"><RiUserStarFill />{open ? 'Animation' : ''}</li>
                <li className="header">{open ? 'Statut' : ''}</li>
                <li className="body"><BsFillDoorOpenFill />{open ? 'Se déconnecter' : ''}</li>
            </ul>
        </div>
    );
}