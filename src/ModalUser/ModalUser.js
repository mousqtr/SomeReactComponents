import MainPage from "./MainPage/MainPage";
import { useState } from "react";
import DescriptionPage from "./DescriptionPage/DescriptionPage";
import "./ModalUser.scss";

export default function ModalUser() {
  const [page, setPage] = useState("main");

  const username = "MousQTR";
  const bio = "La vie est un long fleuve agité";
  const urlImage =
    "https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const background = "linear-gradient(90deg, #5757A9 47%, #9A57A9 100%)";
  const success = ["success0", "success1", "success2"];

  return (
    <div id="modalUser">
      {page === "main" ? (
        <MainPage
          username={username}
          setPage={setPage}
          urlImage={urlImage}
          background={background}
          success={success}
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
