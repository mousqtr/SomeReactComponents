import { useState } from "react";
import Header from "./Header/Header";
import Image from "./Image/Image";
import Badges from "./Badges/Badges";
import Success from "./Success/Success";
import Content from "./Content/Content";
import Edit from "./Edit/Edit";
import "./MainPage.scss";

export default function MainPage({ username, bio, setPage }) {
  const [mode, setMode] = useState("show");

  return (
    <div className="mainPage">
      <div className="block-header">
        <Header mode={mode} />
      </div>
      <div className="block-body">
        <Badges mode={mode} />
        <Success mode={mode} />
        <Content username={username} bio={bio} setPage={setPage} />
      </div>
      <div className="block-image">
        <Image mode={mode} />
      </div>
      <Edit mode={mode} setMode={setMode} />
    </div>
  );
}
