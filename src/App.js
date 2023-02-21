import "./styles.scss";
import Feedback from "./Feedback/Feedback";
import Profile from "./Profile/Profile";
import HelpUs from "./HelpUs/HelpUs";
import Bugs from "./Bugs/Bugs";
import FeedActivities from "./FeedActivities/FeedActivities";
import Settings from "./Settings/Settings";
import AdminMime from "./AdminMime/AdminMime";
import ModalUser from "./ModalUser/ModalUser";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="app">
      {/* <Profile /> */}
      {/* <Feedback /> */}
      {/* <Bugs /> */}
      {/* <FeedActivities /> */}
      {/* <HelpUs /> */}
      {/* <Settings /> */}
      {/* <AdminMime /> */}
      <ModalUser />
    </div>
  );
}
