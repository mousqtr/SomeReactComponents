import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import "./FriendsPage.scss";

export default function FriendsPage({ setPage }) {
  const [elements, setElements] = useState([
    {
      img: "https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Darkmine",
    },
    {
      img: "https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Benji",
    },
    {
      img: "https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "BeastIn",
    },
    {
      img: "https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "Sailor Mouss",
    },
  ]);
  const handlePrevious = () => {
    setPage("main");
  };

  return (
    <div className="friendsPage">
      <div className="previous center-row" onClick={handlePrevious}>
        <FaArrowLeft /> Précédent
      </div>
      <div className="content-section">
        <strong>{elements.length} amis</strong>
        <div className="section-elements">
          <ul>
            {elements.map((elt, index) => (
              <li key={index}>
                <img src={elt.img} />
                <div className="username">{elt.username}</div>
                <button className="btn btn-purple center">
                  <MdPersonAddAlt1 />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
