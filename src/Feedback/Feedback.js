import FeedbackHeader from "./FeedbackHeader/FeedbackHeader";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import "./Feedback.scss";

export default function Feedback() {
  return (
    <div id="feedback" className="section-screen">
        <FeedbackHeader /> 
        <FeedbackForm />
    </div>
  );
}
