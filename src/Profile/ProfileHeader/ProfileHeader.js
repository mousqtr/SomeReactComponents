import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./ProfileHeader.scss";


export default function ProfileHeader(props) {

    const handleOpen = () => props.setOpenNav(true);

    return (
        <div id="profileHeader">
            <div className="profileIcon center" onClick={handleOpen}>
                <GiHamburgerMenu />
            </div>
            {/* <div className="profileTitle">
                <h4>Edition du profil</h4>
            </div> */}
        </div>
    );
}