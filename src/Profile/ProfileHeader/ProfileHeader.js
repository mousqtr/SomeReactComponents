import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./ProfileHeader.scss";


export default function ProfileHeader(props) {

    const handleOpen = () => props.setOpenNav(true);

    return (
        <div id="profileHeader">
            {
                (props.type === 'mobile') ? 
                <div className="profileIcon center" onClick={handleOpen}>
                    <GiHamburgerMenu />
                </div> : <></>
            }
            
            <div className="profileTitle">
                <h4>Accueil > Profil utilisateur</h4>
            </div>
        </div>
    );
}