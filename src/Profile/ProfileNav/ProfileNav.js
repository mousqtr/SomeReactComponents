import React, { useState } from "react";
import "./ProfileNav.scss";
import { IoClose } from "react-icons/io5";
import { MENU } from './../constants';

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
                    MENU.map(elt => 
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