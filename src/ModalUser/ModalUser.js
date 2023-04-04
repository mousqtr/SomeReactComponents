import MainPage from "./MainPage/MainPage";
import { useState } from "react";
import DescriptionPage from "./DescriptionPage/DescriptionPage";
import "./ModalUser.scss";

export default function ModalUser() {
  const [page, setPage] = useState("main");
  const username = "MousQTR";
  const bio =
    "It defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible";
  const urlImage =
    "https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const headerBgColors = [
    {
      color: "#5757a9",
      stop: "47",
    },
    {
      color: "#9a57a9",
      stop: "100",
    },
  ];

  return (
    <div id="modalUser">
      {page === "main" ? (
        <MainPage
          username={username}
          setPage={setPage}
          urlImage={urlImage}
          headerBgColors={headerBgColors}
        />
      ) : (
        <></>
      )}
      {page === "description" ? (
        <DescriptionPage bio={bio} setPage={setPage} />
      ) : (
        <></>
      )}
    </div>
  );
}
