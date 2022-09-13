import Breadcrumb from "./../Breadcrumb/Breadcrumb";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import "./Feedback.scss";

export default function Feedback() {
    
    return (
        <div id="feedback" className="section-screen">
            <Breadcrumb paths={ ['Accueil', 'Nous aider', 'Votre avis']} /> 
            <FeedbackForm />
        </div>
    );
}
