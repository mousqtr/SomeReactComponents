import "./ProfileNav.scss";

export default function ProfileNav() {
  return (
    <div id="profileNav">
        <div className="top-nav">
              Réduire l'onglet {'<<'}
        </div>
        <ul>
            <li>Informations</li>
            <li>Amis</li>
            <li>Notifications</li>
            <li>Test</li>
        </ul>
      {/* <Nav /> */}
    </div>
  );
}