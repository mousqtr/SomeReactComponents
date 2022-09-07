import React, { useState } from "react";
import ProfileNav from "./ProfileNav/ProfileNav";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Profile.scss";

export default function Profile() {
  
  const [openNav, setOpenNav] = useState(true);
  
  const handleOpen = () => setOpenNav(true);
  
  return (
    <div id="profile" className="">
        <div className="profileTitle center" onClick={handleOpen}>
            <GiHamburgerMenu />
        </div>
      <ProfileNav openNav={openNav} setOpenNav={setOpenNav}/>
    </div>
  );
}
