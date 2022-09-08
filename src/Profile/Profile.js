import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import ProfileNav from "./ProfileNav/ProfileNav";
import ProfileBody from "./ProfileBody/ProfileBody";
import "./Profile.scss";
import { WIDTH_MIN } from './constants';



export default function Profile() {
  
  const [openNav, setOpenNav] = useState(false);
  const [mode, setMode] = useState('dashboard');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [type, setType] = useState(window.innerWidth >= WIDTH_MIN ? 'screen' : 'mobile');
  
  const handleWindowResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  
  useEffect(() => {
    console.log(windowWidth)
    let newType = window.innerWidth >= WIDTH_MIN ? 'screen' : 'mobile';
    if (newType !== type) setType(newType);
  }, [windowWidth])
  
  useEffect(() => {
    console.log(type)
  }, [type])
  
  return (
    <div id="profile">   
        <ProfileHeader setOpenNav={setOpenNav} type={type}/>
        {
          (type === 'screen') ?
            <ProfileMenu setMode={setMode}/> :
            <ProfileNav openNav={openNav} setOpenNav={setOpenNav} setMode={setMode}/>
        }
        <ProfileBody mode={mode} />
    </div>
  );
}
