import MainPage from "./MainPage/MainPage";
import { useState } from "react";
import DescriptionPage from "./DescriptionPage/DescriptionPage";
import "./ModalUser.scss";

export default function ModalUser() {
  const [page, setPage] = useState("main");
  const bio =
    "It defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible";

  return (
    <div id="modalUser">
      {page === "main" ? <MainPage bio={bio} setPage={setPage} /> : <></>}
      {page === "description" ? (
        <DescriptionPage bio={bio} setPage={setPage} />
      ) : (
        <></>
      )}
    </div>
  );
}
