import Header from "./Header/Header";
import Image from "./Image/Image";
import Badges from "./Badges/Badges";
import Success from "./Success/Success";
import Content from "./Content/Content";
import Edit from "./Edit/Edit";
import "./MainPage.scss";

export default function MainPage({ username, bio, setPage }) {
  return (
    <div className="mainPage">
      <div className="block-header">
        <Header />
      </div>
      <div className="block-body">
        <Badges />
        <Success />
        <Content username={username} bio={bio} setPage={setPage} />
      </div>
      <Image />
      <Edit />
    </div>
  );
}
