import React, { useState } from "react";
import "./ProfileNav.scss";
import { FaUserFriends, FaUserTie } from "react-icons/fa";
import { MdNotifications, MdSpaceDashboard, MdSettings } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { IoLanguage, IoClose } from "react-icons/io5";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { BsFillDoorOpenFill } from "react-icons/bs";


const menu = [
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
]
    
export default function ProfileNav(props) {

    const handleClose = () => props.setOpenNav(false);
    const handleChangeMode = (id) => {
        props.setMode(id);
        handleClose();
    }

    return (
        <div id="profileNav" style={{width: props.openNav ? '300px' : '0px'}}>
            <ul>
                <li className="title" onClick={handleClose}><IoClose /><h4>Fermer</h4></li>
                {
                    menu.map(elt => 
                        <li 
                            key={elt.id} 
                            className={elt.class}
                            onClick={() => handleChangeMode(elt.id)}>
                        {elt.icon}{elt.text}
                    </li>
                    )
                }
            </ul>
        </div>
    );
}