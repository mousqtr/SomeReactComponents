import React, { useState } from "react";
import "./ProfileNav.scss";
import { FaUserFriends, FaUserTie } from "react-icons/fa";
import { MdNotifications, MdSpaceDashboard, MdSettings } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { IoLanguage, IoClose } from "react-icons/io5";
import { BiArrowToLeft } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";


export default function ProfileNav() {
    
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(!open);
    }
        
    return (
        <div id="profileNav" style={{width: open ? '340px' : '40px'}}>
            <div className="profileNavIcon center" onClick={handleOpen}>
                {open ? <BiArrowToLeft /> : <GiHamburgerMenu />} 
            </div>
            <div className="profileNavContent" style={{width: open ? '300px' : '0px'}}>
                <ul>
                    <li className="header">Général</li>
                    <li className="body"><MdSpaceDashboard />Dashboard</li>
                    <li className="body"><FaUserFriends />Amis</li>
                    <li className="header">Paramètres</li>
                    <li className="body"><MdSettings />Informations</li>
                    <li className="body"><IoLanguage />Langue</li>
                    <li className="body"><MdNotifications />Notifications</li>
                    <li className="header">Avatar</li>
                    <li className="body"><FaUserTie />Personnalisation</li>
                    <li className="body"><RiUserStarFill />Animation</li>
                </ul>
            </div>
        </div>
    );
}