import Header from "./Header/Header";
import Image from "./Image/Image";
import Badges from "./Badges/Badges";
import Success from "./Success/Success";
import Content from "./Content/Content";
import "./MainPage.scss";

export default function MainPage({ bio, setPage }) {
  return (
    <div className="mainPage">
      <div className="block-header">
        <Header />
      </div>
      <div className="block-body">
        <Badges />
        <Success />
        <Content bio={bio} setPage={setPage} />
      </div>
      <Image />
    </div>
  );
}
