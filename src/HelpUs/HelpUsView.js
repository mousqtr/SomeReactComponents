import Breadcrumb from "./../Breadcrumb/Breadcrumb";
import { SECTIONS } from "./sections";

import "./HelpUs.scss";


export default function HelpUsView() {
    return (        
        <div id="helpUs" className="section-screen">
             <div className="section-central">
                <Breadcrumb paths={ ['Accueil', 'Nous aider']} />
                {
                    Object.keys(SECTIONS).map((subSection, index) => 
                        <div key={index} className="helpUsMenu"> 
                            <div className="helpUsMenu-header center">
                                <h1>{subSection}</h1>
                            </div>
                            <div className="helpUsMenu-content">
                                <ul>
                                    {
                                        SECTIONS[subSection].map(elt => 
                                            <li 
                                                key={elt.id} 
                                                className={elt.class}
                                                onClick={() => props.redirect(elt.id)}>
                                            {elt.icon}{elt.text}
                                        </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}