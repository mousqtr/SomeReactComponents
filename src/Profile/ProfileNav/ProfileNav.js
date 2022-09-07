import React, { useState } from "react";
import "./ProfileNav.scss";
import { FaUserFriends, FaUserTie } from "react-icons/fa";
import { MdNotifications, MdSpaceDashboard, MdSettings } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { IoLanguage, IoClose } from "react-icons/io5";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { BsFillDoorOpenFill } from "react-icons/bs";



export default function ProfileNav(props) {

    const handleClose = () => props.setOpenNav(false);

    return (
        <div id="profileNav" style={{width: props.openNav ? '300px' : '0px'}}>
            <ul>
                <li className="title" onClick={handleClose}><IoClose /><h4>Fermer</h4></li>
                <li className="header">Général</li>
                <li className="body"><MdSpaceDashboard />Dashboard</li>
                <li className="body"><FaUserFriends />Amis</li>
                <li className="header">Informations</li>
                <li className="body"><MdSettings />Paramètres</li>
                <li className="body"><IoLanguage />Langue</li>
                <li className="body"><MdNotifications />Notifications</li>
                <li className="header">Avatar</li>
                <li className="body"><FaUserTie />Personnalisation</li>
                <li className="body"><RiUserStarFill />Animation</li>
                <li className="header">Statut</li>
                <li className="body"><BsFillDoorOpenFill />Se déconnecter</li>
            </ul>
        </div>
    );
}