import React, { useState } from "react";
import ProfileNav from "./ProfileNav/ProfileNav";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileBody from "./ProfileBody/ProfileBody";
import "./Profile.scss";

export default function Profile() {
  
  const [openNav, setOpenNav] = useState(false);
  const [mode, setMode] = useState('dashboard')
  
  return (
    <div id="profile">
        <ProfileHeader setOpenNav={setOpenNav}/>
        <ProfileNav openNav={openNav} setOpenNav={setOpenNav} setMode={setMode}/>
        <ProfileBody mode={mode} />
    </div>
  );
}
