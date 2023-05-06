import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./SuccessPage.scss";

export default function SuccessPage({ setPage }) {
  const [elements, setElements] = useState([
    {
      img: "https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Expert du MIME",
      description: "50 parties de Mime gagnés",
    },
    {
      img: "https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Ancienneté niveau 1",
      description: "Inscrit depuis 3 mois",
    },
    {
      img: "https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Le touriste",
      description: "100 salles visités",
    },
    {
      img: "https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Le tryhardeur",
      description: "1000 heures sur la plateforme",
    },
  ]);

  const handlePrevious = () => {
    setPage("main");
  };

  return (
    <div className="successPage">
      <div className="previous center-row" onClick={handlePrevious}>
        <FaArrowLeft /> Précédent
      </div>
      <div className="content-section">
        <strong>{elements.length} succès débloqués</strong>
        <div className="section-elements">
          <ul>
            {elements.map((elt, index) => (
              <li key={index}>
                <img src={elt.img} />
                <div className="success-data">
                  <div className="success-name">{elt.name}</div>
                  <div className="success-description">{elt.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
