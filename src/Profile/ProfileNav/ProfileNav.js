import "./ProfileNav.scss";

export default function ProfileNav() {
  return (
    <div id="profileNav">
        <div className="top-nav">
              Réduire l'onglet {'<<'}
        </div>
        <ul>
            <li className="header">Général</li>
            <li className="body">Informations</li>
            <li className="body">Amis</li>
            <li className="body">Notifications</li>
            <li className="header">Avatar</li>
            <li className="body">Personnalisation</li>
            <li className="body">Animation</li>
        </ul>
      {/* <Nav /> */}
    </div>
  );
}