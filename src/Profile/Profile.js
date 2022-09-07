import React, { useState } from "react";
import ProfileNav from "./ProfileNav/ProfileNav";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import "./Profile.scss";

export default function Profile() {
  
  const [openNav, setOpenNav] = useState(false);
  
  return (
    <div id="profile">
        <ProfileHeader setOpenNav={setOpenNav}/>
        <ProfileNav openNav={openNav} setOpenNav={setOpenNav}/>
    </div>
  );
}
