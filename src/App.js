import "./styles.scss";
import Feedback from "./Feedback/Feedback";
import Profile from "./Profile/Profile";
// import HelpUs from "HelpUs/HelpUs";
import Bugs from "./Bugs/Bugs";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="app">
        {/* <Profile /> */}
        {/* <Feedback /> */}
        <Bugs />
    </div>
  );
}
