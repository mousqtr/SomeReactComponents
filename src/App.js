import "./styles.scss";
import Feedback from "./Feedback/Feedback";
import Profile from "./Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="app">
        {/* <Profile /> */}
        <Feedback />
    </div>
  );
}
