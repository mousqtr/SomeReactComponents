import React, { useState } from "react";
import "./ProfileBody.scss";


export default function ProfileBody (props) {

    return (
        <div id="profileBody">
            {props.mode}
        </div>
    );
}