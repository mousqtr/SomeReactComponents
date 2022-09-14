// import { useState, useEffect } from "react";
import HelpUsView from "./HelpUsView";

// const WIDTH_MIN = 900;

export default function HelpUs() {
    
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [type, setType] = useState(window.innerWidth >= WIDTH_MIN ? 'screen' : 'mobile');
    
    // const handleWindowResize = () => setWindowWidth(window.innerWidth);

    // useEffect(() => {
    //     window.addEventListener('resize', handleWindowResize);
    //     return () => {
    //     window.removeEventListener('resize', handleWindowResize);
    //     };
    // }, []);
    
    // useEffect(() => {
    //     console.log(windowWidth)
    //     let newType = window.innerWidth >= WIDTH_MIN ? 'screen' : 'mobile';
    //     if (newType !== type) setType(newType);
    // }, [windowWidth])
    
    // useEffect(() => {
    //     console.log(type)
    // }, [type])
    
    const handleRedirect = (id) => {
        console.log(id);
    }
    
    return (
        <HelpUsView redirect={handleRedirect} />
    );
}
