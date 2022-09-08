import React, { useState } from "react";
import "./ProfileMenu.scss";
import { MENU } from './../constants';


export default function ProfileMenu (props) {
    
    const handleChangeMode = (id) => {
        props.setMode(id);
    }
    
    return (
        <div id="profileMenu">
            <ul>
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