import MainPage from "./MainPage/MainPage";
import "./ModalUser.scss";

export default function ModalUser() {
  const bio =
    "It defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible";

  return (
    <div id="modalUser">
      <MainPage bio={bio} />
    </div>
  );
}
