import Breadcrumb from "./../Breadcrumb/Breadcrumb";
import BugsForm from "./BugsForm/BugsForm";
import "./Bugs.scss";

export default function Bugs() {
    
    return (
        <div id="bugs" className="section-screen">
            <Breadcrumb paths={ ['Accueil', 'Nous aider', 'Anomalies']} /> 
            <BugsForm />
        </div>
    );
}