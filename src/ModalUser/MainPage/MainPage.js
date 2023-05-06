import { useState } from "react";
import Header from "./Header/Header";
import Image from "./Image/Image";
// import Badges from "./Badges/Badges";
import Success from "./Success/Success";
import Content from "./Content/Content";
import Edit from "./Edit/Edit";
import { BsPencilFill } from "react-icons/bs";
import "./MainPage.scss";

export default function MainPage({
  setPage,
  username,
  urlImage,
  background,
  success,
}) {
  const handleEdit = () => {
    console.log("edit");
  };

  return (
    <div className="mainPage">
      <div className="block-header">
        <Header bg={background} />
      </div>
      <div className="block-body">
        {/* <Badges mode={mode} /> */}
        <Success success={success} />
        <Content username={username} setPage={setPage} />
      </div>
      <div className="block-image">
        <Image url={urlImage} />
      </div>
      <div className="button-edit center" onClick={handleEdit}>
        <BsPencilFill />
      </div>
    </div>
  );
}
