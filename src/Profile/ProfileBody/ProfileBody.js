import React, { useState } from "react";
import "./ProfileBody.scss";
import { MENU } from './../constants';

export default function ProfileBody (props) {

    return (
        <div id="profileBody">
            <h4>{MENU.find(data => data.id === props.mode).text}</h4>
        </div>
    );
}